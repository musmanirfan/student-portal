import Image from "next/image";
import Link from "next/link";
import AllStudents from "./allStudents";

export default function Home() {
  return (
    <>


      <Link href={"/addStudents"}><button>Add Student</button></Link>

      <AllStudents />
    </>
  );
}
