import Container from '@/components/container'
import Form from '@/components/form'
import TagsProvider from '@/context/tags-context'

const Tags = () => {
  return (
    <main>
      <Container>
        <TagsProvider>
          <Form />
        </TagsProvider>
      </Container>
    </main> 
  )
}

export default Tags
