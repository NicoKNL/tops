import * as vscode from 'vscode';
import * as cp from 'child_process';

let root = vscode.workspace.getConfiguration('tops').scriptsRoot;

async function executeCommand(cmd: string) : Promise<string> {
    return new Promise<string>((resolve, reject) => {
        cp.exec(cmd, (err, out) => {
            if (err) {
                return reject(err);
            }
            return resolve(out);
        });
    });
}

async function getScriptFromUser() : Promise<string> {
    const files = await vscode.workspace.fs.readDirectory(vscode.Uri.file(root));

    const scripts : string[] = [];
    files.forEach(e => scripts.push(e[0]));

    return await vscode.window.showQuickPick(scripts) || '';
}

export function activate(context: vscode.ExtensionContext) {
    if (root.length === 0) {
        root = `${context.extensionPath}/examples`;
        console.log("getting path: ");
        console.log(root);
    }

    let disposable = vscode.commands.registerCommand('tops.tops', async () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            const text = document.getText(selection);
            
            const script = await getScriptFromUser();
            const cmd: string = ['python', `${root}/${script}`, `"${text}"` ].join(' ');
            console.log("cmd: " + cmd);
            const result:string = await executeCommand(cmd);

            editor.edit(editBuilder => {
                 editBuilder.replace(selection, result);
             });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
