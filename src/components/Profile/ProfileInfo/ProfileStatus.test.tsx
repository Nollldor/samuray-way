import {create} from "react-test-renderer";
import {ProfileStatus} from "components/Profile/ProfileInfo/ProfileStatus";

describe('ProfileStatus test', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatus status={'testStatus'} updateStatus={(status = 'test') => {}}/>);
        const instance = component.root;

        expect(instance.props.status).toBe('testStatus');
    });
    test('span should be displayed', () => {
        const component = create(<ProfileStatus status={'testStatus'} updateStatus={(status = 'test') => {}}/>);
        const instance = component.root;
        const span = instance.findByType('span')
        expect(span).not.toBeNull();
    });
    test('span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status={'testStatus'} updateStatus={(status = 'test') => {}}/>);
        const instance = component.root;
        const span = instance.findByType('span')
        expect(span.children[1]).toBe('testStatus');
    });

    test('input should be displayed on edit mod instead span', () => {
        const component = create(<ProfileStatus status={'testStatus'} updateStatus={(status = 'test') => {}}/>);
        const instance = component.root;
        const span = instance.findByType('span')
        span.props.onDoubleClick()
        const input = instance.findByType('input')
        expect(input.props.value).toBe('testStatus');
    });
});
