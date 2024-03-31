const htmlStroke = require('./src/htmlStroke')
const vscode = require('vscode');

function activate(context) {
	console.log('Congratulations, your extension "code3d" is now active!');
	
	let currentPanel

	let disposable = vscode.commands.registerCommand('code3d.show', function () {
		const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;


		if (currentPanel) {
			currentPanel.reveal(columnToShowIn);
		} else {
			currentPanel = vscode.window.createWebviewPanel(
				'code3d',
				'Code3D',
				columnToShowIn || vscode.ViewColumn.One,
				{ 
					localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, '')],
					enableScripts: true, 
				}
			);

			const view3dPath = vscode.Uri.joinPath(context.extensionUri, 'src/js_build/index.js')
			const view3dPathSrc = currentPanel.webview.asWebviewUri(view3dPath)
			currentPanel.webview.html = htmlStroke.getWebviewContent({
				view3dPathSrc,
			});

			//currentPanel.webview.onDidReceiveMessage(message => {
			//	if (message.command === 'alert') {
			//		vscode.window.showInformationMessage(message.text);
			//	}
			//})
	
			currentPanel.onDidDispose(
				() => {
					currentPanel = undefined;
				},
				null,
				context.subscriptions
			)
		}
		vscode.window.showInformationMessage('Hello World from code3d!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
