import Image from "next/image";
import AllStudents from "./allStudents/page";
import Link from "next/link";

export default function Home() {
  return (
    <>


      <Link href={"/addStudents"}><button>Add Student</button></Link>

      <AllStudents />
    </>
  );
}
