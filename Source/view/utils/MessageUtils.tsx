interface vscode {
	postMessage(message: any): void;
}

declare const vscode: vscode;

export const sendMessage = <TState,>(type: string, state: TState) => {
	vscode.postMessage({ command: type, text: state });
};
