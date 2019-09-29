// Has to be a react class component instead of functional component because 
// Some of the polaris components will require state.

class AnnotatedLayout extends React.Component {
    state = {};

    render() {
        return <div>Annotated layout page</div>;
    }
}

export default AnnotatedLayout;