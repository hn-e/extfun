import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Client, Account, Functions } from 'appwrite';
import { useParty } from '../context/PartyContext';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const functions = new Functions(client);

const Shimmer = () => (
  <div className="hero-gradient-bg fixed inset-0 z-30 flex items-end justify-center">
    <div className="max-h-[90vh] w-full rounded-t-3xl bg-black/75 p-8 text-white shadow-2xl backdrop-blur-xl sm:w-[420px]">
      <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-400/50" />

      <div className="shimmer mx-auto mb-6 h-5 w-48 rounded" />

      <div className="shimmer mb-4 h-56 w-full rounded-xl" />

      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="shimmer h-5 w-40 rounded" />
        <div className="shimmer size-6 rounded-full" />
      </div>

      <div className="mb-4 space-y-2">
        <div className="shimmer h-3 w-full rounded" />
        <div className="shimmer h-3 w-3/4 rounded" />
      </div>

      <div className="mb-4 flex gap-2">
        <div className="flex-1">
          <div className="shimmer mb-1 h-3 w-10 rounded" />
          <div className="shimmer h-9 rounded-lg" />
        </div>
        <div className="flex-1">
          <div className="shimmer mb-1 h-3 w-10 rounded" />
          <div className="shimmer h-9 rounded-lg" />
        </div>
      </div>

      <div className="shimmer mb-1 h-3 w-16 rounded" />
      <div className="shimmer mb-2 h-6 w-full rounded" />

      <div className="shimmer mt-6 h-8 w-full rounded" />
      <div className="shimmer mt-6 h-8 w-full rounded" />
    </div>
  </div>
);

const Inviter = () => {
  const { partyid } = useParams();
  const navigate = useNavigate();
  const { setParty } = useParty();

  useEffect(() => {
    if (!partyid) return;

    const run = async () => {
      try {
        // await account.createAnonymousSession();
        try {
          await account.get();
        } catch {
          await account.createAnonymousSession();
        }

        const execution = await functions.createExecution(
          import.meta.env.VITE_SENDNOTIF_FUNCTION_ID,
          JSON.stringify({
            __action: '__party_fetch',
            partyId: partyid,
          })
        );

        const data = JSON.parse(execution.responseBody);
        const party = data.result;
        setParty(party);
      } catch (e) {
        console.error(e);
      } finally {
        navigate('/');
      }
    };

    run();
  }, [partyid, navigate]);

  return <Shimmer />;
};

export default Inviter;
