import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExampleUserProfileFromDatabaseByEmail } from "@/features/example-user-profile/example-user-profile-model";

export async function ExampleUserProfileCard() {
  const user = await getExampleUserProfileFromDatabaseByEmail(
    "hudson.marylin@gmail.com",
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example User</CardTitle>
      </CardHeader>
      {user ? (
        <>
          <CardContent>
            <CardDescription>
              This is an example user, to demonstrate the use of ShadCN
              components.
            </CardDescription>
            <ul>
              <li>
                <span className="font-bold">Name: </span>
                {user.name}
              </li>
              <li>
                <span className="font-bold">Email: </span>
                {user.email}
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <ul>
              <li>
                <span className="font-bold">Created At:</span>{" "}
                {user.createdAt.toDateString()}
              </li>
              <li>
                <span className="font-bold">Updated At:</span>{" "}
                {user.updatedAt.toDateString()}
              </li>
            </ul>
          </CardFooter>
        </>
      ) : (
        <>
          <CardContent>
            <p>Example User not found.</p>
          </CardContent>
        </>
      )}
    </Card>
  );
}
