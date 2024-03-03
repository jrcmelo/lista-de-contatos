import GuideBar from '../../components/GuideBar'
import { RiContactsFill, RiAddLine } from 'react-icons/ri'
import { MdFavorite } from 'react-icons/md'
import { S } from './styles'

const Home = () => {
  return (
    <S.Home>
      <GuideBar
        title="Meus Contatos"
        route="/myContacts"
        Icon={RiContactsFill}
      />
      <GuideBar title="Adicionar" route="/addContacts" Icon={RiAddLine} />
      <GuideBar title="Favoritos" route="/myContacts" Icon={MdFavorite} />
    </S.Home>
  )
}

export default Home
