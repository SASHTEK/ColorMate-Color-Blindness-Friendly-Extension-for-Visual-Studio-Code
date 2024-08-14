import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Define new color values
    const newRedColor = "#00FF00"; // Green
    const newGreenColor = "#FF0000"; // Red

    // Access the theme configuration
    const config = vscode.workspace.getConfiguration("editor.tokenColorCustomizations");

    // Modify the color rules
    config["textMateRules"].forEach((rule: any) => {
        if (rule.scope.includes("keyword")) {
            rule.settings.foreground = newRedColor; // Swap red and green
        } else if (rule.scope.includes("variable")) {
            rule.settings.foreground = newGreenColor;
        }
    });

    // Apply the updated configuration
    vscode.workspace.getConfiguration().update("editor.tokenColorCustomizations", config, vscode.ConfigurationTarget.Global);
}

// This method is called when your extension is deactivated
export function deactivate() {}
