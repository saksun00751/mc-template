import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Nav from 'components/Nav'
import Main from 'components/Main'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <main>
    <Nav />
      <Main />
        </main>
  )
}
