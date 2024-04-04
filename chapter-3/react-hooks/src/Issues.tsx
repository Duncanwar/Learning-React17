// Dependencies
import { FC, useState, useEffect } from "react";
import axios from "axios";

// Types
type Issue={
    number: number
    title: string
    state:string
}



const Issues : FC=()=>{
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(()=> {
        axios.get('https://api.github.com/repos/ContentPI/ContentPI/issues')
        .then((response:any)=>{
            setIssues(response.data)
        })
    },[])

        return(
            <>
            <h1>ContentPI Issues</h1>
            {issues.map((issue: Issue)=>(
                <p key={issue.title}>
                    <strong>#{issue.number}</strong>{' '}
                    <a href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`}
                    target="_blank">{issue.title}</a>{' '}
                </p>
            ))}
            </>
        )
}

export default Issues