import React from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import Navbar from "src/components/navbar"
import Footer from "src/components/footer"

interface LayoutProps {
    children: React.ReactNode
    seoTitle?: string
}

const Layout = ({ children, seoTitle }: LayoutProps) => {
  return (
    <>
        <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            <title>{seoTitle} | Netflix</title>
        </Head>
        <Navbar />
        <div className="pt-[56px]">{children}</div>
        <Footer />
    </>
  )
}
export default Layout