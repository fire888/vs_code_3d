
module.exports.getWebviewContent = function getWebviewContent (path) {
	return `<!DOCTYPE html>
		<html lang="en">
			<head>
				<title>three.js webgl - geometry - cube</title>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
				<style>
		
body {
	width: 100vw;
	height: 100vh;
	            padding: 0;
            margin: 0;
}

#3d-graph {
	padding: 0;
	margin: 0;
}

.graph-info-msg {
    top: 50%;
    width: 100%;
    text-align: center;
    color: lavender;
    opacity: 0.7;
    font-size: 22px;
    position: absolute;
    font-family: Sans-serif;
}

.scene-container .clickable {
    cursor: pointer;
}

.scene-container .grabbable {
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
}

.scene-container .grabbable:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
}

.scene-nav-info {
    bottom: 5px;
    width: 100%;
    text-align: center;
    color: slategrey;
    opacity: 0.7;
    font-size: 10px;
}

.scene-tooltip {
    top: 0;
    color: lavender;
    font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
    position: absolute;
    font-family: sans-serif;
    pointer-events: none;
    user-select: none;
}

.scene-container canvas:focus {
    outline: none;
}


				</style>
			</head>
			<body>
			<div id="3d-graph"></div>
            <script type="module" src="${ path.view3dPathSrc }"></script>
        </body>
    </html>`
}
