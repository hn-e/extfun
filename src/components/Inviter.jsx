import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Client, Account, Functions } from 'appwrite';
import { useParty } from '../context/PartyContext';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const functions = new Functions(client);

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

  return null;
};

export default Inviter;
