import { useParams } from "react-router-dom"
import PaeContainer from "../../../components/ui/PageContainer"
import IssueDetail from "../components/IssueDetail"
import IssueStats from "../components/IssueStats"

export default function IssuePage() {

    const { issueId } = useParams()

    return (
        <PaeContainer>
            <div className="flex grid-6 gap-4">
                <div className="w-7/10">
                    <IssueDetail issueId={issueId} />
                </div>

                <div className="w-3/10">
                    <IssueStats issueId={issueId} />
                </div>
            </div>
        </PaeContainer>
    )
}