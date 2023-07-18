import Content from "../Content/content";

function Error(): JSX.Element {
    return <Content title="Page Not Found">
        <h2>Sorry, this page not exists...</h2>
    </Content>
}

export default Error