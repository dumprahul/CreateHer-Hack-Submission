import TransgateConnect from "@zkpass/transgate-js-sdk"

const appid1 = "4f8d5132-0680-4226-b7e0-7d9abb1b92f9"
const value1 = "ce77d8bbd3204b0c9f9205b6935bf53b"

export const startVerification = async (setResult: (result: any) => void) => {
  try {
    const connector = new TransgateConnect(appid1)
    const isAvailable = await connector.isTransgateAvailable()
    if (!isAvailable) {
      return alert("Please install zkPass TransGate")
    }

    const res = await connector.launch(value1)
    console.log("Successful Verification through zkpass")
    setResult(res)
  } catch (err) {
    alert(JSON.stringify(err))
    console.log("error", err)
  }
}
