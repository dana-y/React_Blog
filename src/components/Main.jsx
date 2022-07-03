import styled from 'styled-components'
import PostList from './Posts/PostList'
import About from './Posts/About'

const MaxWidthDiv = styled.div`
	display: flex;
	flex-direction: row-reverse;
	gap: 2.4rem;
	position: relative;
  @media (max-width: 1024px) {
		flex-direction: column;
	}
`

export default function Main(props) {
  return (
    <main>
      <MaxWidthDiv className='max-width'>
        <h2 className='a11y-hidden'>Post</h2>
        <PostList posts={props.posts}/>
        <About users={props.users}/>
      </MaxWidthDiv>
    </main>
  );
}
