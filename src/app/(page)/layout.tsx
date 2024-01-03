import Footer from '~/common/footer';
import Header from '~/common/header';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
