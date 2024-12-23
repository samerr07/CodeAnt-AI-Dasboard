import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Signin = () => {

    const [selfTab, setSelfTab] = useState(false)
    const [saasTab, setSaasTab] = useState(true)

    return (
        <div className="h-screen bg-white py-20 ">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Left side content */}
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="relative border-r border=gray-100 hidden md:block">
                        
                        <div className="bg-white rounded-xl shadow-lg p-6 mt-24 mb-6 max-w-md">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" alt="CodeAnt Logo" className="w-6 h-6" />
                                <span className="text-gray-800 font-medium">AI to Detect & Autofix Bad Code</span>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-center mb-6">
                                <div>
                                    <div className="font-semibold text-xl">30+</div>
                                    <div className="text-sm text-gray-600">Language Support</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-xl">10K+</div>
                                    <div className="text-sm text-gray-600">Developers</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-xl">100K+</div>
                                    <div className="text-sm text-gray-600">Hours Saved</div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="bg-white mt-8 rounded-xl shadow-lg p-6 max-w-[200px] absolute right-12 top-40">
                            <div className="mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <div className="w-8 h-8 border-4 border-purple-500 rounded-full border-t-transparent"></div>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600">Issues Fixed</div>
                            <div className="text-2xl font-semibold mb-2">500K+</div>
                            <div className="flex items-center text-blue-500 text-sm">
                                <span className="mr-1">↑</span>
                                <span>14%</span>
                                <span className="text-gray-400 ml-2">This week</span>
                            </div>
                        </div>

                        
                        <div className="mt-28">
                            <div className="relative w-48 h-48">
                                <img src="./Subtract.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Sign in form */}
                    <div className="bg-white rounded-lg border shadow-lg border-purple-300 p-8 max-w-md mx-auto w-full">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex  items-center gap-2">

                                <img src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" alt="CodeAnt Logo" className="w-6 h-6" />
                                <span className="font-semibold text-xl">CodeAnt AI</span>
                            </div>
                        </div>

                        <h1 className="text-2xl text-center font-semibold mb-6">Welcome to CodeAnt AI</h1>

                        <div className="flex gap-4 mb-8">
                            <button onClick={() =>{ setSelfTab(false), setSaasTab(true)}} className={`flex-1 ${saasTab ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"} py-2 px-4 rounded-md `}>
                                SAAS
                            </button>
                            <button onClick={() =>{ setSelfTab(true), setSaasTab(false)}} className={`flex-1 ${selfTab ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"} py-2 px-4 rounded-md `}>
                                Self Hosted
                            </button>
                        </div>

                        {
                            selfTab ? (
                                <div className="space-y-4">
                                    <Link to={"/"} className="w-full border rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                                        <FaGithub className="w-5 h-5" />
                                        Sign in with Github
                                    </Link>
                                    <Link className="w-full border rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                                        <img src="https://s3-alpha-sig.figma.com/img/3d0d/fd55/d42e5934f560acdcfb255f59bf8a3f8c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC-WcuU-G7Kro6uDnBgLnIXnkZOkyBHwdD1wJp2v~fv9TodnzI3OaoYZr8pyt2NKfRPTxwdmEmugLcAoklcbo3p6cgg873EkudE7Uhu-2j~l9CSel~5yrPVab~o4sApF-MnsgNp5gfJx~H8ip5L7sz9gcC14gWcBunI5auDA-fpRctpqJof9JIb22D-tBe5rZ6xTa3cOQl9GI9x2L9rE98vaLBAHV1tCCl7whwjcOi14jqfkrhykx~1F0QlMD593uQPRqTML2I7C43If1LhojqQ9GPAAqE6mjhIvWv0j-Vq~A09S0rN53U2bPQAHHZVU~vTytiOwcgj~WFMo4DOVCg__" alt="GitLab" className="w-5 h-5" />
                                        Sign in with GitLab
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <Link to={"/"} className="w-full border rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                                        <FaGithub className="w-5 h-5" />
                                        Sign in with Github
                                    </Link>
                                    <Link to={"/"} className="w-full border rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                                        <img src="https://s3-alpha-sig.figma.com/img/51ba/b679/cc2a304a91ce52088b0b9217405c6da9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b-uIyXNzaR5FgBgfdDPzsqjThxHcNJ6ly58M1ukt7HRwcSxAW4jzCLyLOMcdzn1MPYIDY021ethlH-s8eWCTIb-L-TgMcgYIqqq5aCkNHFHYZy7j461~osYaSs3BKXm~JaZ0KyfaCbw5nGgMdUToUuo1qukbAxFOShdjhIscDUAfOS8aC1JR561Ne5kznfxDREktaOpUVxD19iPLdrsWED61TuMAL3y15aH3U9yMPtdNVM1L7xnnthN6LvFXToSIKemxHEErqr-0XC0v2jsS01avI8QUAK3oMi0sHVc9S99lx6HXv7LTocMd-ruA2Jea996VGuPCI7DAhnd32-LWdg__" alt="Bitbucket" className="w-5 h-5" />
                                        Sign in with Bitbucket
                                    </Link>
                                    <Link to={"/"} className="w-full border rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                                        <img src="https://s3-alpha-sig.figma.com/img/bed8/e269/8628a1e9773da28a87ab5c0148428ab6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PvKbzuC223phBpnbGPHvAP3Mp2ggs2zjn30L4RzmkTulPIkGR8gL4d-o8w-bTYi1j~uwL4w0bqonSHDOCWlJUqJJnzbcM2V5OfVNeWar-sJLrAjEVVMwMf8jAWEofteDaVNceX9TLjcl9WZngSgckrrr6-jawSP32YLoU46KG38miWWSfNUqAWDj55VjmKUxwUMKkVPZiVk1Zd~jc7fgvXfux9tE9V5a0o71j1aHmHL1iNWMg5hGxpWAI-OyZl036HIWsvk639nP6EPypOZA~YNpDcIlqH805ogNn~U6UuMcqrqYn85Y74fKI1O3yaa9eZ~me0uFaXYfoJK7M-EKKw__" alt="Azure DevOps" className="w-5 h-5" />
                                        Sign in with Azure Devops
                                    </Link>
                                    <Link to={"/"} className="w-full border rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50">
                                        <img src="https://s3-alpha-sig.figma.com/img/3d0d/fd55/d42e5934f560acdcfb255f59bf8a3f8c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC-WcuU-G7Kro6uDnBgLnIXnkZOkyBHwdD1wJp2v~fv9TodnzI3OaoYZr8pyt2NKfRPTxwdmEmugLcAoklcbo3p6cgg873EkudE7Uhu-2j~l9CSel~5yrPVab~o4sApF-MnsgNp5gfJx~H8ip5L7sz9gcC14gWcBunI5auDA-fpRctpqJof9JIb22D-tBe5rZ6xTa3cOQl9GI9x2L9rE98vaLBAHV1tCCl7whwjcOi14jqfkrhykx~1F0QlMD593uQPRqTML2I7C43If1LhojqQ9GPAAqE6mjhIvWv0j-Vq~A09S0rN53U2bPQAHHZVU~vTytiOwcgj~WFMo4DOVCg__" alt="GitLab" className="w-5 h-5" />
                                        Sign in with GitLab
                                    </Link>
                                </div>
                            )
                        }


                        <p className="text-sm text-gray-600 text-center mt-6">
                            By signing up you agree to the{" "}
                            <a href="#" className="text-gray-900">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
