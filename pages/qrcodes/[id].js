import Head from "next/head";
import QRCodeForm, { QRCodeFormType } from "@/components/QRCodeForm";
import styles from "@/styles/QRCodeEditPage.module.css";
import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

export async function getServerSideProps(context) {
  const { id } = context.query;
  await dbConnect();

  const qrCodes = await QRCode.findById(id);
  if (qrCodes) {
    return {
      props: {
        qrCodes: JSON.parse(JSON.stringify(qrCodes)),
      },
    };
  }
  return {
    notFound: true,
  };
}

export default function QRCodeEditPage({ qrCodes }) {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (values) => {
    await axios.patch(`/qrcodes/${id}`, values);
    router.push("/qrcodes/");
  };
  return (
    <>
      <Head>
        <title>QRCode 수정하기 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>QRCode 수정하기</h1>
        <QRCodeForm
          type={QRCodeFormType.Edit}
          initialValues={qrCodes}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
