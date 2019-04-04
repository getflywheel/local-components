import IReactComponentProps from './IReactComponentProps';
import { IContainerProps } from '../../components/Container/Container';

export default interface ILocalContainerProps extends IReactComponentProps {
	container?: IContainerProps;
}
