"use client"
import { Resend } from 'resend'
import React, {useState} from 'react'
import Link from "next/link"
import Image from "next/image"
//import GithubIcon from "/github.svg";
// import LinkedinIcon from "/linkedin-icon.svg";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
    
        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
        }
      };
    

    return (
        <section id = "contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap=4 relative">
            <div className="z-10">
                <h2 className="text-xl font-bold text-white my-2"> Lets Connect</h2>
                <p className="text-[#ADB7BE] mb-4 max-w-md">Currently looking for Co-op opportunities, and my Email is always open!</p>

                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/JonathanSudarpo">
                        <Image src="/images/githubpurple.png" width={48} height={48} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jonathansudarpo/">
                        <Image src="/images/linkedlogo.png" width={48} height={48} alt="LinkedIn Icon" />
                    </Link>
                </div>
            </div>

            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className = "mb-6"> 
                    <label htmlFor="email" type="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="jonathantsudarpo@google.com"
                    />
                    </div>

                    <div className = "mb-6">
                    <label htmlFor="subject" className="text-white blocktext-sm mb-2 font-medium">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Just Saying Hi!"
                    />
                    </div>

                    <div className= "mb-6">
                        <label 
                            htmlFor ="message"
                            className = "text-white block text-sm mb-2 font-medium" >
                                Message

                            </label>
                            <textarea 
                                name= "message"
                                id = "message"
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                                />
                    </div>
                       <button
                        type = "submit"
                        className = "bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"> 
                        Send Message
                        </button>
                        {
                        emailSubmitted && (
                            <p className = "text-green-500 text-sm mt-2"> 
                            Email has been sent successfully!
                            </p>
                            )
                        }
                </form>
            </div>

        </section>
    )
}

export default EmailSection
