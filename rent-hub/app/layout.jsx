import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata =  {
    title: 'Rent Hub | Find the perfect rental',
    description: "Find your dream rental property with Rent Hub. We have a wide range of properties to rent in the UK. Start your search today.",
    keywords: "rent, rental, find rentals, find properties"
}

const MainLayout = ({children}) => {


  return (
    <html lang='en'>
        <body>
          <Navbar />
        <main>{children}</main>
        </body>
    </html>

  )
}

export default MainLayout;