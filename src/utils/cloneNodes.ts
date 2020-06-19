import { Children, isValidElement, cloneElement } from 'react';
import { isString } from 'lodash';

/**
 * @param nodes nodes to clone
 * @param extraProps additional props to shallow merge in with props
 * Helper to clone React nodes and shallow merge in additional props
 * *Note that this will not merge in the additional props if the node is a native DOM element to avoid passing down invalid props to DOM elements*
 */
export default function cloneNodes(nodes: React.ReactNode, props: { [key: string]: any }): React.ReactNode {
	return Children.map(nodes, (node) => {
		if (!isValidElement(node))	{
			return node;
		}

		/**
		 * if the node is a primitive DOM element rather than a React element, clone it but don't pass it props
		 * React elements (primitive DOM nodes) type property is a string while React coponents will be of type function or class
		 * see this for more info: https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
		 */
		if (isString(node.type)) {
			return cloneElement(node);
		}

		return cloneElement(node, { ...props });
	});
}

