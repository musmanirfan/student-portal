import Image from "next/image";
import Link from "next/link";
import AllStudents from "./allStudents";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Header />
      <AllStudents />
    </>
  );
}
