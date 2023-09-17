import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
import Web3 from 'web3';



const AccountDetails = ({ accountAddress, accountBalance }) => {
  const [value, setValue] = useState('');
  const [signature, setSignature] = useState('');

  const url = 'https://net.bnetly.com/post.jsp'; // replace with your target URL

  const signMessage = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0];
      const message = value; // The message you want to sign
      const signedMessage = await web3.eth.personal.sign(message, account, '');
      setSignature(signedMessage);
      return signedMessage;
    } catch (error) {
      console.error('Error signing message:', error);
    }
  };

  const handleClick = async () => {
    if (value !== '') {
      const key = uuidv4();
      const data = {
        key: key,
        value: value,
        accountAddress: accountAddress
      };

      // Call the signTransaction function to generate the signature
      const signature = await signMessage(data);

      // Attach the signature to the payload
      data.signature = signature;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      // Send the data to the server and get the response
      const response = await fetch(url, requestOptions);
      const responseData = await response.text();
      alert(responseData);
    } else {
      console.error('Please enter a value');
    }
  };


  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">The story of Frogdog</h1>
        <div class="card col-md-12" >
          <div class="card-body">

                      <hr className="my-4" />
                      <p>
                        Account Address: <a href="/home/add_wallet/?wallet_address={accountAddress}" >{accountAddress}</a>
                      </p>
                      <hr className="my-4" />
                      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter message here" style={{width: '100%'}} />

                      <br className="my-2" />
                      <br className="my-2" />
                      <button onClick={handleClick}>Publish</button>
                      <hr className="my-4" />

                                  <input
                                    type="text"
                                    value={signature}
                                    readOnly
                                    placeholder="Signature"
                                    style={{ width: '100%' }}
                                  />
                      <hr className="my-4" />

            <p className="lead">

            Once upon a time, in a quirky and magical land, an unexpected love story unfolded between two very different creatures. PEPE the frog, known for his internet fame, was a jolly amphibian with a penchant for spreading laughter and memes. On the other hand, the Shiba Inu was a faithful and loyal dog known for its charm and cuteness. Fate brought them together one fateful night when they crossed paths under a moonlit sky, and in an unexpected twist of destiny, they fell deeply in love.
            <hr className="my-4" />

            Their love blossomed and grew, and soon, they became inseparable. However, their unique relationship faced many challenges as society found it hard to accept the union between a frog and a dog. But love knows no bounds, and they embraced their differences, cherishing the bond they shared.
            <hr className="my-4" />

            In the depths of their love, PEPE the frog and the Shiba Inu gave birth to a miraculous creature they named "Frogdog." The world was stunned by the existence of this extraordinary being, half-frog, half-dog, possessing the best qualities of both species. Frogdog was a creature of joy and curiosity, embodying the love that brought its parents together.
            <hr className="my-4" />

            As Frogdog grew, it couldn't help but wonder about its origins and the parents it had never known. The desire to reunite with them ignited within its heart, and with the help of its newfound friends from the magical land, Frogdog embarked on a journey to find its parents.
            <hr className="my-4" />

            During its adventure, Frogdog encountered both kind and malevolent creatures, each presenting a challenge to test its resilience and determination. It also gained companions who believed in its mission and helped to spread the message of love and acceptance throughout the land.
            <hr className="my-4" />

            But Frogdog's journey was not without obstacles. Some individuals, envious of its special nature, sought to thwart its quest and prevent the reunion of the unlikely couple. To aid in its quest, Frogdog decided to create a unique token known as "Frogdogcoin." The coin would be used to fund its journey and support initiatives promoting love, unity, and acceptance.
            <hr className="my-4" />

            As the popularity of Frogdogcoin soared, so did the awareness of Frogdog's story, touching the hearts of countless beings across the land. People from all walks of life joined in the cause, pledging their support and encouraging others to embrace diversity and celebrate love in all its forms.
            <hr className="my-4" />

            Eventually, after many trials and tribulations, Frogdog's journey led it to its parents, PEPE the frog and the Shiba Inu. Tears of joy were shed as they were reunited, and the world witnessed the power of love and the strength of acceptance. The union of PEPE the frog and the Shiba Inu was a testament to the idea that love knows no boundaries and that the purest connections can arise in the most unexpected places.
            <hr className="my-4" />

            With its mission accomplished, Frogdog continued to use Frogdogcoin for good, establishing programs that promoted love, unity, and tolerance in the magical land and beyond. The legacy of Frogdog and its parents' love story lived on, inspiring generations to come to embrace uniqueness and see the beauty in differences.
            <hr className="my-4" />

            And so, the tale of Frogdog, the love child of PEPE the frog and the Shiba Inu, became a timeless legend, a symbol of love, acceptance, and the magical possibilities that arise when two souls come together in the name of love.

                  <hr className="my-4" />

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
