import Container from "@/components/container"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Typography from "@/components/typography";

const NotFound = () => {
  return (
    <main>
      <Container className="h-withoutHeader flex-col-center gap-y-5">
        <Typography tag="h1" variant="h2">
          Oops - error <Typography tag='span' variant="h1" className="text-red-500">404</Typography> ocurred
        </Typography>
        <Typography tag="p" variant="subtitle">
          The page you are looking for doesn't exist.
        </Typography>
        <Button variant='link' asChild>
          <Link to="/" className="text-primary">
            <Typography tag="span" variant="span">Go back to home</Typography>
          </Link>
        </Button>
      </Container>
    </main>
  )
}

export default NotFound