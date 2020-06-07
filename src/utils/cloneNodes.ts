import { Children, isValidElement, cloneElement } from 'react';

/**
 * Helper to clone React nodes and shallow merge an props
 * @param nodes nodes to clone
 * @param extraProps additional props to shallow merge in with addrtional props
 */
export default function cloneNodes(nodes: React.ReactNode, extraProps: { [key: string]: any }): React.ReactNode {
	return Children.map(nodes, (node) => {
		if (!isValidElement(node))	{
			return node;
		}

		return cloneElement(node, { ...extraProps });
	});
}
