import { GithubOctocatLogo } from '../icons/GithubOctoCatLogo';
import { LinkedinLogo } from '../icons/LinkedinLogo';
import { TwitterLogo } from '../icons/TwitterLogo';
import styles from '../styles/Footer.module.css';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialContainer}>
        <h3>Social Media</h3>
        <div className={styles.socialIcons}>
          <a title='Github' href='https://github.com/carlosfrontend' target='_blank' referrerPolicy='no-referrer'>
            <GithubOctocatLogo style={{ fontSize: '2.5em' }} />
          </a>
          <a title='Linkedin' href='https://www.linkedin.com/in/carlosfrontend/' target='_blank' referrerPolicy='no-referrer'>
            <LinkedinLogo style={{ fontSize: '2.5em' }} />
          </a>
          <a title='X Twitter' href='https://x.com/CarlosFrontEnd' target='_blank' referrerPolicy='no-referrer'>
            <TwitterLogo style={{ fontSize: '2.5em' }} />
          </a>
        </div>
      </div>
      <div className={styles.attrContainer}>
        <div className={styles.attrLinks}>
          <small>
            Photo by{' '}
            <a href='https://unsplash.com/es/@spoony?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              Hieu Vu Minh
            </a>{' '}
            in{' '}
            <a href='https://unsplash.com/es/fotos/persona-con-gafas-de-sol-y-sudadera-con-capucha-en-la-arena-a34bX5nYHog?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              Unsplash
            </a>
          </small>
      
          <small>
            Photo by{' '}
            <a href='https://unsplash.com/es/@saad_jml?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              Saad Jameel
            </a>{' '}
            in{' '}
            <a href='https://unsplash.com/es/fotos/una-persona-sosteniendo-un-telefono-celular-en-la-mano-Ts69r4ehizo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              Unsplash
            </a>
          </small>
      
          <small>
            Photo by{' '}
            <a href='https://unsplash.com/es/@zelladun?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              Fachry Zella Devandra
            </a>{' '}
            in{' '}
            <a href='https://unsplash.com/es/fotos/foto-en-escala-de-grises-par-de-zapatillas-adidas-bNSdIkCBJOs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              Unsplash
            </a>
          </small>
        

          <small>
            Photo by{' '}
            <a href='https://unsplash.com/es/@deannaalys?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              deanna alys
            </a>{' '}
            in{' '}
            <a href='https://unsplash.com/es/fotos/frasco-de-perfume-de-vidrio-transparente-sobre-mesa-de-madera-marron-xQwRvghauaU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash' target='_blank' referrerPolicy='no-referrer'>
              Unsplash
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};
