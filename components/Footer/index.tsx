import Link from "next/link";
import { Catalyst, Github, Instagram, Twitter } from "../assets";

export default function Footer() {

    interface Link {
        label: string;
        url: string;
    }

    interface SociaLink {
        label: SVGAElement;
        url: string
    }

    const SocialLinks = [
        {
            label: <Github />,
            url: "/"
        },
        {
            label: <Twitter />,
            url: "/"
        },
        {
            label: <Instagram />,
            url: "/"
        }
    ]

    const LearnLinks: Link[] = [
        {
            label: "Docs",
            url: "/",
        },
        {
            label: "Quick Guide",
            url: "/"
        },
        {
            label: "Wiki",
            url: "/"
        }
    ]

    const ConnectLinks: Link[] = [
        {
            label: "New Articles",
            url: "/",
        },
        {
            label: "Popular Articles",
            url: "/"
        },
        {
            label: "Most Read",
            url: "/"
        },
        {
            label: "Tips & Tricks",
            url: "/"
        }
    ]

    const ContactList: string[] = [
        "4321 ABCD House. Mesa, New Jersey 45463",
        "+1234567890",
        "31vivekpal@gmail.com"
    ]

    return (
        <footer className="mt-32 lg:text-left text-[var(--gray-300)] bg-black">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h6 className="mb-4 flex items-center justify-center gap-2 font-semibold uppercase md:justify-start text-[var(--secondary-50)]">
                            <Catalyst />Catalyst
                        </h6>
                        <p>
                            Catalyst enables effortless cross-chain deposits for in-app assets. Whether you're a developer looking to integrate cross-chain functionalities, or a user seeking smooth asset transfers, Catalyst is your one-stop solution.
                        </p>
                        <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
                            {
                                SocialLinks.map((link, index) =>
                                    <Link href={link.url}>
                                        {link.label}
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-[var(--secondary-50)]">
                            Learn
                        </h6>
                        {
                            LearnLinks.map((link, index) =>
                                <p key={index} className="mb-4">
                                    <Link href={link.url} >
                                        {link.label}
                                    </Link>
                                </p>)
                        }
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-[var(--secondary-50)]">
                            Connect
                        </h6>
                        {
                            ConnectLinks.map((link, index) =>
                                <p key={index} className="mb-4">
                                    <Link href={link.url} >
                                        {link.label}
                                    </Link>
                                </p>)
                        }
                    </div>
                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-[var(--secondary-50)]">
                            Contact
                        </h6>
                        {
                            ContactList.map((contact, index) =>
                                <p key={index} className="flex items-center justify-center md:justify-start">
                                    {contact}
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}
