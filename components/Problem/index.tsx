import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {IProblem} from "@/models/IProblem";
import Link from "next/link";
import {useEffect} from "react";

interface ProblemProps {
    problem: IProblem,
}

export function Problem({ problem } : ProblemProps) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{problem.title}</CardTitle>
                <CardDescription>{problem.date}</CardDescription>
                <CardDescription>{`Необходим ${problem.role.toLowerCase()}`}</CardDescription>
            </CardHeader>
            <CardContent>
                {`${ problem.content.slice(0, 119)}...`}
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Join</Button>
                <Button asChild><Link href={`/problems/${problem.id}`}>Check Problem</Link></Button>
            </CardFooter>
        </Card>
    )
}
