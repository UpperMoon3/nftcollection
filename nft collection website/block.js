var web3;

async function Connect() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);

            // Show the image container once the user is connected
            document.getElementById("image-container").style.display = "block";
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error("Web3 not found. Please install Metamask.");
    }
}
