import SEOHead from './components/SEOHead';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <>
      <SEOHead />
      
      <div 
        className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <ProfileCard />
      </div>
    </>
  )
}

export default App
