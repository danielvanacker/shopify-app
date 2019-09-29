import { EmptyState, Layout, Page } from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

//Main page of the app

const Index = () => (
    <Page>
        <Layout>
            <EmptyState
                heading="Discount your products temporarily"
                action={{
                    content: 'Select products',
                    onAction: () => console.log('clicked'),
                }}
                image = {img}
            >
                <p>Select products to change their price temporarily.</p>
            </EmptyState>
        </Layout>
    </Page>
);

export default Index;

// Empty state component: Displayed when you have no state (i.e. a merchant has just added the app).
// Layout component: adds structure to the other components I will add.