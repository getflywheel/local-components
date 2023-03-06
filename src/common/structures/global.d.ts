export {};

declare global {
	interface WindowEventMap {
		hideTooltip: CustomEvent<{ id: string }>;
		showTooltip: CustomEvent<{ id: string }>;
	}
}
