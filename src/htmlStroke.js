
module.exports.getWebviewContent = function getWebviewContent (path) {
	return `<!DOCTYPE html>
		<html lang="en">
			<head>
				<title>three.js webgl - geometry - cube</title>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
			</head>
			<body>
			<div id="3d-graph"></div>
            <script type="module" src="${ path.view3dPathSrc }"></script>
        </body>
    </html>`
}
