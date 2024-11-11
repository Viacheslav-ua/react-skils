import { useTranslation } from 'react-i18next'


export const HomePage = () => {
  const { t } = useTranslation()
  return (
    <article data-testid="home-page">
      <h1 className='text-4xl dark:text-slate-200 text-center my-8'>{t('About')}</h1>

      <div className='max-w-[800px] bg-lime-200 p-6 mb-8 mx-auto rounded-2xl shadow-md text-lg'>
        <p className=''>
          {t('AboutProject')}
        </p>
        <p>
          {t('MainStack')}
        </p>
        <div className='flex justify-center gap-8 mt-10' >
          <img src="./react.svg" alt="react" />
          <img src="./typescript.svg" alt="typescript" />
          <img src="./tailwind.svg" alt="tailwind" />
          <img src="./zustand.webp" width="100px" alt="zustand" />
          <img src="./tanstack.png" width="56px" height="56px" alt="tanstack" />
          <img src="./vite.svg" alt="vite" />
          <img src="./vitest.svg" alt="vitest" />
        </div>
        <div className='flex justify-center mt-8'>
          <a href="https://github.com/Viacheslav-ua/react-skills" 
            className="flex items-center gap-2" target="_blank">
              <img src="https://github.com/fluidicon.png" className="w-8 h-8 " alt="GitHub" />
              {t('ProjectCode')}
          </a>
        </div>
      </div>
      
    
    </article>
  )
}