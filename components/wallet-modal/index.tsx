import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/modal";
import Image, { StaticImageData } from "next/image";
import { useWalletContext } from "./WalletContext";
import BackPack from "@/images/backpack.png";
import Phantom from "@/images/phantom.png";
import MoreWallet from "@/images/morewallet.png";
import Ethereum from "@/images/ethereum.png";

export default function WalletModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { connect } = useWalletContext();

    interface WalletButton {
        text: string,
        image: StaticImageData,
        walletName?: string
    }

    const walletButtons: WalletButton[] = [
        {
            text: "BackPack",
            image: BackPack,
            walletName: "backpack"
        },
        {
            text: "Phantom",
            image: Phantom,
            walletName: "phantom"
        },
        {
            text: "More Wallet",
            image: MoreWallet
        },
        {
            text: "Ethereum",
            image: Ethereum,
            walletName: "moongate"
        }
    ];

    const handleWalletConnect = async (walletName?: string) => {
        if (walletName) {
            await connect(walletName);
        }
        onOpenChange(false);
    };

    return (
        <>
            <Button
                onPress={onOpen}
                className="bg-[var(--secondary-300)] text-[var(--primary-700)]">
                Connect
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                size="xs"
                className="bg-transparent backdrop-contrast-75 border-2 border-[var(--gray-700)] pb-4"
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1 text-center">Connect Wallet</ModalHeader>
                    <ModalBody>
                        {walletButtons.map((button, index) => (
                            <Button
                                key={index}
                                onPress={() => handleWalletConnect(button.walletName)}
                                className="py-8 flex justify-between items-center bg-[var(--secondary-200)] text-xl font-bold text-[var(--gray-900)]"
                            >
                                {button.text}
                                <Image src={button.image} alt={button.text} />
                            </Button>
                        ))}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
