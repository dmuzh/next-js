import { CartProvider } from '@/context/cart'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <CartProvider><Component {...pageProps} /></CartProvider>
}
