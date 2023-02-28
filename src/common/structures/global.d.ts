export {};

declare global {
	interface DocumentEventMap {
		hideTooltip: CustomEvent<{ id: string }>;
	}
}
