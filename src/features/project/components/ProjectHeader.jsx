import Header from "../../../components/layout/Header"
import Button from "../../../components/ui/Button"

export default function ProjectHeader() {
    return (
        <Header
            title="Project"
            actions={
                <Button>
                    + Create Issue
                </Button>
            }
        />
    )
}