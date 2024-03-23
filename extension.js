// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const panel = vscode.window.createWebviewPanel(
		'aaaa',
		'bbbb',
		vscode.ViewColumn,
		{ enableScripts: true }
	)

	panel.webview.html = getWebViewComponent()
	panel.webview.onDidReceiveMessage(message => {
		if (message.command === 'alert') {
			vscode.window.showInformationMessage(message.text);
		}
	})

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "code3d" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('code3d.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from code3d!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

function getWebViewComponent () {
	return `
	<html>
		<head>
			<script>
				var vsCode = acquireVsCodeApi();
				document.addEventListener('DOMContentLoaded', () => {
					vsCode.postMessage({ command: 'alert', text: 'New MESSAGE' })
					const n = document.getElementById('hhh')
					n.style.color = 'yellow'
				})


			</script>
		</head>
		<body>
			<h1 id='hhh'>AAAAA---</h1>
		</body>
	</html>`
}


module.exports = {
	activate,
	deactivate
}
