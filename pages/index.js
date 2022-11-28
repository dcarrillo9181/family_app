import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
            pathname: '/[username]',
            query: { username: 'dorianc85' },
          }}>
        <>Dorian's profile</>
      </Link>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me
      </button>
    </div>
  )
}
