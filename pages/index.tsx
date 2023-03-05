import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  
  return (
    <div>
      <Link href="/login">
        로그인하기
      </Link>
    </div>
  )
}

export default Home
