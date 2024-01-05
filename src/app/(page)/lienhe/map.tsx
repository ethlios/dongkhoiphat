export interface IAppProps {
    setOpenMap: any;
}

export default function MyMap({ setOpenMap }: IAppProps) {
    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.3)',
                position: 'fixed',
                zIndex: '3000',
                top: 0,
                left: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className="cpmount"
            onClick={() => setOpenMap(false)}
        >
            <div
                style={{
                    width: '600px',
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 15px',
                    backgroundColor: '#fff',
                    borderRadius: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5975962077923!2d106.65085467473912!3d10.842075389310663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a20d599ea7%3A0xfeead938ce774e0d!2zMTgzLzI2LzE5LCAxODMvMjYvMzkgTmd1eeG7hW4gVsSDbiBLaOG7kWksIFBoxrDhu51uZyA4LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MjgxMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1704449697234!5m2!1svi!2s"
                    width="600"
                    height="500"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
