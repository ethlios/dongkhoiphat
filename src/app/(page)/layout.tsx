import Footer from '~/common/footer';
import Header from '~/common/header';
import 'tippy.js/dist/tippy.css';

export default function ComponentConnectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
