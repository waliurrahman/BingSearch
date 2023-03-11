import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <Head>
                <link rel="icon" href="/sohaji-icon.png" />
            </Head>
            <h1>
                <Link href="/">
                    <Image
                        src={'/sohaji.png'}
                        alt={'SohaJi.com'}
                        width={270}
                        height={90}
                        style={{ color: 'red', height: 'fit-content' }}
                        quality={40}
                    />
                </Link>
            </h1>
        </>
    );
}

export default Header