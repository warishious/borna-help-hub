import {
  Compass,
  Users,
  CalendarDays,
  FileText,
  CreditCard,
  MessageSquare,
  Phone,
  Inbox,
  type LucideIcon,
} from "lucide-react";

export type Product = "Borna Care" | "Borna Admin" | "Borna Connect";

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; points: string[] }[] }
  | { type: "callout"; title: string; items: string[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type Topic = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  product: Product;
  articles: number;
  videos: number;
  /** YouTube video id */
  youtubeId?: string;
  videoTitle?: string;
  intro: string;
  sections: Section[];
};

export const topics: Topic[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Sign up, sign in, and verify your Borna admin account.",
    icon: Compass,
    product: "Borna Admin",
    articles: 1,
    videos: 1,
    youtubeId: "nRGY1-LxXaM",
    videoTitle: "How to Sign Up and Securely Sign In to the Borna Admin Workspace",
    intro:
      "Use this guide to learn how clinic admins can create an account, sign in securely, and complete two-factor authentication before accessing the Borna admin workspace.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Borna admin portal is the workspace clinic teams use to manage appointments, patients, forms, chat, and payments in one place.",
          },
          {
            type: "p",
            text: "This guide walks through creating an admin account, signing in securely with two-factor authentication, and finding your way around the dashboard for the first time.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "A valid clinic admin email address.",
              "Access to the phone number linked with your admin account.",
              "Your Borna admin portal link.",
              "A stable internet connection.",
            ],
          },
          {
            type: "p",
            text: "Important: Borna uses two-factor authentication to help protect clinic and patient information. After entering your email and password, you may also need to verify your identity using a code sent to your registered phone number.",
          },
        ],
      },
      {
        id: "sign-in-page",
        title: "Step 1: Open the Borna Admin Sign-in Page",
        blocks: [
          {
            type: "list",
            items: [
              "Go to the Borna admin portal link provided by your clinic or Borna onboarding team.",
              "The Sign in screen will appear.",
              "On this page, you will see the email and password fields on the right side.",
              "Enter your registered work email address.",
              "Enter your password.",
            ],
          },
        ],
      },
      {
        id: "create-account",
        title: "Step 2: Create an Admin Account",
        blocks: [
          { type: "p", text: "Use this step only if you do not already have an admin account." },
          {
            type: "list",
            items: [
              "On the Sign in page, click Sign up now.",
              "The Create Your Account screen will open.",
              "Enter your work email address.",
              "Click the option to send or verify your email code, if required.",
              "Check your email inbox for the verification code.",
              "Enter the code in Borna to confirm your email address.",
              "Create a password.",
              "Confirm your password.",
              "Enter your display name.",
              "Enter your phone number.",
              "Click Create once all required fields are completed.",
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "The Create button may remain inactive until all required information is entered correctly. Check that your email, password, confirmed password, display name, and phone number are complete.",
            ],
          },
        ],
      },
      {
        id: "sign-in",
        title: "Step 3: Sign In with an Existing Admin Account",
        blocks: [
          {
            type: "list",
            items: [
              "Return to the Sign in page.",
              "Enter your registered email address.",
              "Enter your password.",
              "Click Sign in.",
              "Borna will verify your login details.",
              "After your password is accepted, the two-factor authentication screen will appear.",
            ],
          },
        ],
      },
      {
        id: "two-factor",
        title: "Step 4: Complete Two-Factor Authentication",
        blocks: [
          {
            type: "list",
            items: [
              "Review the masked phone number shown on the verification screen.",
              "Choose how you want to receive your verification code.",
              "Select Send Code to receive a code by message.",
              "Alternatively, select Call Me if you prefer to receive the code by phone call.",
              "Once you receive the code, enter it in the verification field.",
              "Click Verify Code.",
              "Borna will confirm the code and complete the sign-in process.",
            ],
          },
        ],
      },
      {
        id: "workspace",
        title: "Step 5: Access the Admin Workspace",
        blocks: [
          {
            type: "p",
            text: "After successful verification, you will be taken into the Borna admin workspace. From the admin workspace, clinic staff can manage clinic operations such as:",
          },
          {
            type: "list",
            items: [
              "Patient forms.",
              "Provider and service configuration.",
              "Payments and payment requests.",
              "Appointments.",
              "Patient communication.",
              "Follow-ups, where available.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I did not receive my verification code",
                a: "Check that your phone number is correct. Wait a few moments and try again. Use the resend option, if available. Try the call option if the message does not arrive. Contact your clinic admin or Borna support if the issue continues.",
              },
              {
                q: "My password is not working",
                a: "Confirm that you are using the correct admin email address. Re-enter your password carefully. Check for extra spaces before or after the password. Use the password reset option, if available. Contact your clinic admin or Borna support if you are still unable to sign in.",
              },
              {
                q: "The Create button is disabled",
                a: "Confirm that all required fields are filled. Make sure the password and confirmed password match. Check that the email verification step has been completed. Confirm that the phone number is entered in the correct format.",
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Use your clinic email address so account access stays with the practice.",
              "Keep your registered phone number up to date for two-factor codes.",
              "Never share your password or verification codes, even with colleagues.",
              "Sign out on shared or public devices after each session.",
              "Give each team member their own admin login instead of sharing one account.",
            ],
          },
        ],
      },
      {
        id: "next-step",
        title: "Recommended next step",
        blocks: [
          {
            type: "p",
            text: "After signing in, review the admin dashboard and confirm that your clinic profile, services, providers, forms, and payment settings are configured correctly.",
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "Creating an admin account takes a few minutes: open the Borna admin sign-in page, register or sign in with your clinic email, verify your identity with two-factor authentication, and then set up your clinic details from the dashboard.",
          },
        ],
      },
    ],
  },
  {
    slug: "payments",
    title: "Payments",
    description: "View, pay, and track payment requests from your clinic.",
    icon: CreditCard,
    product: "Borna Care",
    articles: 1,
    videos: 2,
    youtubeId: "osWYtKXv6_8",
    videoTitle: "Borna Care Payments Section: Review, Pay & Track Your Payment Requests",
    intro:
      "Use this guide to learn how to view and pay a payment request sent by your clinic through Borna Care.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Payments section in Borna Care allows you to view payment requests from your clinic, choose a saved payment method, make a full or partial payment, and download receipts from your payment history.",
          },
          { type: "p", text: "This feature helps you manage clinic payments securely from your patient portal." },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "A connected clinic profile.",
              "A payment request from your clinic.",
              "A saved payment method, or payment details ready to add.",
              "Access to your email or phone if verification is required.",
            ],
          },
        ],
      },
      {
        id: "pay-a-request",
        title: "Pay a payment request",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open your clinic dashboard",
                points: [
                  "Sign in to your Borna Care account.",
                  "Select the clinic that sent you the payment request.",
                  "The clinic dashboard will open with appointments, forms, payments, dependents, notifications, chat, and support.",
                ],
              },
              {
                title: "Open the Payments section",
                points: [
                  "Click Payments from the clinic dashboard.",
                  "The Payments page shows pending payment requests, recent transactions, saved payment methods, and payment history.",
                ],
              },
              {
                title: "Review the payment request",
                points: [
                  "Look for the new payment request in the Payments section.",
                  "Review the payment amount.",
                  "Check the service date.",
                  "Check the current payment status.",
                  "Click Pay Now to open the payment request details.",
                ],
              },
              {
                title: "Review the payment details",
                points: [
                  "Review the clinic name.",
                  "Check the payment request ID.",
                  "Review the due date.",
                  "Confirm the patient information.",
                  "Review the service date.",
                  "Confirm the total amount due.",
                ],
              },
              {
                title: "Choose a payment method",
                points: [
                  "On the right side of the payment page, review the available payment methods.",
                  "You can select a saved card or bank account.",
                  "If you do not want to use a saved method, select the option to add a new payment method.",
                  "Borna Care may allow payment by credit card or bank account, depending on your clinic's setup.",
                ],
              },
              {
                title: "Add a new payment method",
                points: [
                  "Use this step only if you do not want to use an existing saved payment method.",
                  "Select Add New Payment Method.",
                  "Choose whether you want to add card details or bank account details.",
                  "Enter the required payment information and save it, if needed.",
                  "Return to the payment request page to continue the payment.",
                ],
              },
              {
                title: "Select a saved payment method",
                points: [
                  "Choose the payment method you want to use.",
                  "In the demo, the saved bank account ending in 4534 is selected.",
                  "Confirm that the selected payment method is correct before continuing.",
                ],
              },
              {
                title: "Enter the payment amount",
                points: [
                  "Enter the amount you want to pay.",
                  "You may be able to make a partial payment if your clinic allows it.",
                  "In the demo, the payment amount entered is $50.",
                  "Review the amount before submitting the payment.",
                ],
              },
              {
                title: "Submit the payment",
                points: [
                  "Confirm the selected payment method and amount.",
                  "Click Pay.",
                  "Borna Care will begin processing the secure payment.",
                  "Do not refresh or close the page while the payment is being processed.",
                ],
              },
              {
                title: "Review the payment confirmation",
                points: [
                  "Review the payment amount, patient name, and payment date.",
                  "Confirm the clinic name and selected payment method.",
                  "Check the reference note or payment description.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "Before making a payment, always confirm that the clinic name, patient name, amount, and service details are correct.",
            ],
          },
        ],
      },
      {
        id: "status-and-history",
        title: "Payment status, history, and receipts",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Understand the payment status",
                points: [
                  "After submission, the payment may show as Pending.",
                  "This means the payment has been received but may still need to be verified by the clinic.",
                  "Once the clinic confirms the payment, the status may change to Settled.",
                ],
              },
              {
                title: "Return to the Payments page",
                points: [
                  "Click the option to return to the Payments page.",
                  "The payment request will now show an updated status.",
                  "The recent transaction panel also shows the new payment activity.",
                ],
              },
              {
                title: "Open Payment History",
                points: [
                  "From the Payments page, open Payment History.",
                  "This section keeps a record of previous payment activity across connected clinics.",
                  "The table shows transaction details, payment date, payment method, amount, status, and receipt action.",
                ],
              },
              {
                title: "Download a receipt",
                points: [
                  "Find the payment transaction in the Payment History table.",
                  "Click the receipt download option.",
                  "The receipt will download as a PDF file.",
                  "Save the receipt for your records if needed.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "admin-requests",
        title: "For clinics: create, send, and track payment requests",
        blocks: [
          {
            type: "p",
            text: "Clinic teams raise the payment requests that patients see in Borna Care. This is done from the Payments dashboard in the Borna admin portal.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Open the Payments dashboard",
                points: [
                  "Sign in to the Borna admin portal.",
                  "Open the Payments section from the main navigation.",
                  "Review the summary of paid, pending, and overdue requests.",
                ],
              },
              {
                title: "Create a payment request",
                points: [
                  "Click the option to create a new payment request.",
                  "Search for and select the patient the request is for.",
                  "Add the service or item description and the amount due.",
                  "Add a due date and any note the patient should see.",
                ],
              },
              {
                title: "Send the request",
                points: [
                  "Review the patient name, amount, and description before sending.",
                  "Send the request so it appears in the patient's Borna Care Payments section.",
                  "The patient is notified and can pay from their portal.",
                ],
              },
              {
                title: "Track and reconcile",
                points: [
                  "Watch the request move from Pending to Settled once payment is confirmed.",
                  "Filter by status or date to find outstanding requests.",
                  "Open a transaction to view details or download the receipt for your records.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "Only clinic admins with payment permissions can create or cancel payment requests.",
              "Cancel and re-issue a request rather than editing an amount a patient has already part-paid.",
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Confirm you are inside the correct clinic profile.",
              "Review the payment request amount.",
              "Check the service description.",
              "Confirm the selected payment method.",
              "Make sure the payment amount entered is correct.",
              "Wait for the confirmation screen before leaving the page.",
              "Download the receipt after payment, if needed.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot see the payment request",
                a: "Confirm you are signed in to the correct Borna Care account. Make sure you selected the correct clinic. Open the Payments section again and check whether the request appears under pending payments. Contact the clinic if the payment request is still not visible.",
              },
              {
                q: "My payment method is not showing",
                a: "Check whether you have saved a payment method. Add a new card or bank account if needed. Confirm that all required payment details are entered correctly. Contact the clinic or Borna support if the payment method cannot be added.",
              },
              {
                q: "I entered the wrong amount",
                a: "Review the amount before clicking Pay. If you already submitted the payment, contact the clinic directly and ask how the remaining balance or correction should be handled.",
              },
              {
                q: "My payment is showing as pending",
                a: "Pending status means the payment has been submitted but may still be under verification. Wait for the clinic to confirm the payment and check the Payment History section for updates. Contact the clinic if the status does not change after a reasonable time.",
              },
              {
                q: "I cannot download the receipt",
                a: "Check your browser download settings. Make sure pop-ups or downloads are not blocked. Try downloading the receipt again. Contact the clinic or Borna support if the issue continues.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Payments section in Borna Care allows you to securely pay clinic payment requests from your patient portal. You can open a payment request, review the details, choose a saved payment method, make a full or partial payment, track the status, and download a receipt from Payment History.",
          },
        ],
      },
    ],
  },
  {
    slug: "chatting",
    title: "Chatting",
    description: "Message your clinic, get AI answers, and book through chat.",
    icon: MessageSquare,
    product: "Borna Care",
    articles: 1,
    videos: 1,
    youtubeId: "yOcU7Jb5cvc",
    videoTitle: "Borna Care Chat",
    intro:
      "Use this guide to learn how patients can start a chat with the clinic, ask general questions, get support from the AI assistant, and book an appointment through the Borna Care chat feature.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Chat section in Borna Care allows patients to communicate with their clinic directly from the patient portal. Patients can use chat to:",
          },
          {
            type: "list",
            items: [
              "Ask general clinic questions.",
              "Request appointment support.",
              "Ask billing-related questions.",
              "Get AI-assisted responses.",
              "Book an available appointment.",
              "Review previous chat history.",
            ],
          },
          {
            type: "p",
            text: "This helps patients get quick support without needing to call the clinic for every question.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "A connected clinic profile.",
              "Selected the correct clinic from your dashboard.",
              "A stable internet connection.",
            ],
          },
        ],
      },
      {
        id: "start-a-chat",
        title: "Start a chat and ask a question",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open your clinic dashboard",
                points: [
                  "Sign in to your Borna Care account.",
                  "Select the clinic you want to contact.",
                  "The clinic dashboard will open with appointments, forms, payments, dependents, notifications, chat, and support.",
                ],
              },
              {
                title: "Open the Chat section",
                points: [
                  "Click Chat from the clinic dashboard.",
                  "If you have no previous conversations, the page will show that there are no chats yet.",
                  "You can start a new conversation from this screen.",
                ],
              },
              {
                title: "Start a new chat",
                points: [
                  "Click Start New Chat.",
                  "A new conversation will open with the selected clinic.",
                  "The AI assistant will greet you and ask how it can help.",
                  "You may see quick options such as Book Appointment, Billing Question, or General Inquiry.",
                ],
              },
              {
                title: "Ask a general question",
                points: [
                  "Select General Inquiry.",
                  "The AI assistant will ask what you would like to know about the clinic.",
                  "Type your question in the message box and click send.",
                  "In the demo, the patient asks about office timings and the assistant responds with the clinic's working hours, such as Monday to Friday, 9:00 AM to 5:00 PM.",
                ],
              },
              {
                title: "Review the AI response",
                points: [
                  "Read the response from the AI assistant.",
                  "If the answer resolves your question, no further action is needed.",
                  "The conversation may be marked as ended once the response is completed.",
                  "You can still view the conversation later from the chat history panel.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "book-through-chat",
        title: "Book an appointment through chat",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Start another chat",
                points: [
                  "Click Start New Chat again.",
                  "Previous conversations remain available in the chat history on the left side.",
                  "This allows you to keep different requests separate.",
                ],
              },
              {
                title: "Select Book Appointment",
                points: [
                  "The AI assistant will check available appointment options.",
                  "If a slot is available, the assistant will show the date and time.",
                  "Review the available appointment slot.",
                ],
              },
              {
                title: "Select an appointment slot",
                points: [
                  "Click the available appointment option.",
                  "The selected date and time will appear in the chat.",
                  "The AI assistant will confirm the selected appointment details.",
                  "Once confirmed, the appointment will be scheduled.",
                ],
              },
              {
                title: "Confirm the booking",
                points: [
                  "Review the confirmation message from the AI assistant.",
                  "The message will confirm that the appointment has been successfully scheduled.",
                  "You can reply with a short message, such as \u201cThanks,\u201d if needed.",
                ],
              },
              {
                title: "Review chat history",
                points: [
                  "Use the chat history panel to view previous conversations.",
                  "Each conversation remains saved for reference.",
                  "You can review general inquiries, appointment booking conversations, and other clinic-related chats.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Select the correct chat category before sending your message.",
              "Use General Inquiry for clinic hours, location, or general questions.",
              "Use Book Appointment when you want to schedule a visit.",
              "Use Billing Question for payment or billing-related support.",
              "Keep your message clear and specific.",
              "Review the AI response before starting a new chat.",
              "Start a separate chat for a different topic.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot see the Chat option",
                a: "Confirm that you are inside the correct clinic dashboard. Refresh the page. Check whether chat is enabled for your clinic. Contact the clinic if the Chat option is still not visible.",
              },
              {
                q: "The AI assistant did not answer my question",
                a: "Try rephrasing your question clearly. Select the most relevant chat category. Start a new chat if needed. Contact the clinic through Support if the question still cannot be answered.",
              },
              {
                q: "I cannot book an appointment through chat",
                a: "Confirm that appointment booking is available for your clinic. Check whether the AI assistant shows available appointment slots. Try booking from the Appointments section instead. Contact the clinic if no appointment slots are available.",
              },
              {
                q: "My chat ended too soon",
                a: "Open the chat history to review the conversation. Start a new chat if you still need help. Use Support if the request requires clinic staff assistance.",
              },
              {
                q: "I cannot find my previous conversation",
                a: "Open the Chat section again. Check the chat history panel on the left side. Look for the conversation by topic or latest message. Contact the clinic if the conversation history does not appear.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Chat feature in Borna Care gives patients a simple way to contact their clinic from the patient portal. Patients can ask general questions, receive AI-assisted answers, book appointments, and review previous conversations from the chat history.",
          },
        ],
      },
    ],
  },
  {
    slug: "appointments",
    title: "Appointments",
    description: "Book, review, reschedule, or cancel appointments.",
    icon: CalendarDays,
    product: "Borna Care",
    articles: 1,
    videos: 0,
    intro:
      "Use this guide to learn how to book, review, reschedule, or cancel an appointment from the Borna Care patient portal.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Appointments section in Borna Care allows you to view upcoming appointments, check appointment details, book a new appointment, and manage existing appointments from your clinic dashboard.",
          },
          {
            type: "p",
            text: "This feature helps patients schedule visits directly from the portal without needing to call the clinic for every booking request.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "A connected clinic profile.",
              "Selected the correct clinic from your dashboard.",
              "Available appointment services and providers configured by the clinic.",
              "Updated contact details in your profile.",
            ],
          },
        ],
      },
      {
        id: "book",
        title: "Book an appointment",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open your clinic dashboard",
                points: [
                  "Sign in to your Borna Care account.",
                  "Select the clinic where you want to book an appointment.",
                  "The clinic dashboard will open with appointments, forms, payments, dependents, notifications, chat, and support.",
                ],
              },
              {
                title: "Open the Appointments section",
                points: [
                  "Click Appointments from the clinic dashboard.",
                  "From here, you can view upcoming appointments, appointment history, and available booking options.",
                  "You may also switch between list view and calendar view, depending on the available display options.",
                ],
              },
              {
                title: "Review existing appointments",
                points: [
                  "Check the calendar or appointment list for any existing appointments.",
                  "Open an appointment to review its details.",
                  "The detail view may show status, provider name, date, time, clinic location, and visit type.",
                ],
              },
              {
                title: "Start a new appointment booking",
                points: [
                  "Click the option to schedule or book another appointment.",
                  "The booking flow will open.",
                  "The process usually includes Choose Your Appointment, Review, and Scheduled.",
                ],
              },
              {
                title: "Choose the appointment service",
                points: [
                  "Select the service or visit type you want to book.",
                  "In the demo, the selected service is Consultation.",
                  "The available services may depend on the clinic's configuration.",
                ],
              },
              {
                title: "Select a provider",
                points: [
                  "After selecting the service, choose the provider.",
                  "In the demo, the selected provider is Albert Einstein.",
                  "If no provider is available, contact the clinic or try a different service.",
                ],
              },
              {
                title: "Select an appointment date and time",
                points: [
                  "Available dates and time slots will appear.",
                  "Select the date that works for you. In the demo, the selected date is July 15.",
                  "Select an available time slot. In the demo, the slot is 1:30 PM to 2:00 PM.",
                ],
              },
              {
                title: "Continue to review",
                points: [
                  "After selecting the date and time, click Next.",
                  "The Review page will show the selected provider, date, time, and clinic location.",
                  "Review these details carefully before submitting.",
                ],
              },
              {
                title: "Confirm patient information",
                points: [
                  "Review the patient name, date of birth, phone number, email address, and new or existing patient status.",
                  "Make sure the information is accurate.",
                  "If any information is incorrect, update your profile or contact the clinic before submitting.",
                ],
              },
              {
                title: "Add an optional message",
                points: [
                  "Use the optional message field to share notes with the clinic.",
                  "You may add a reason for visit, preferred provider note, pain or urgent concern, or a special instruction.",
                  "This field can be left blank if no message is needed.",
                ],
              },
              {
                title: "Submit the appointment request",
                points: [
                  "Review the appointment summary one final time.",
                  "Confirm the service, provider, date and time, and your contact information.",
                  "Click Submit.",
                ],
              },
              {
                title: "Review appointment confirmation",
                points: [
                  "The appointment confirmation page will appear.",
                  "Review the provider, date, time, clinic location, visit type, and appointment status.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "Before booking a new appointment, review your existing appointments to avoid duplicate bookings or scheduling conflicts.",
            ],
          },
        ],
      },
      {
        id: "manage",
        title: "Manage, cancel, and rebook",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Manage the appointment",
                points: [
                  "From the confirmation page, you may see options to manage the appointment.",
                  "Available actions may include Reschedule and Cancel.",
                  "Use these options only if your appointment details need to be changed.",
                ],
              },
              {
                title: "Cancel an appointment",
                points: [
                  "Select the cancel option if you no longer need the appointment.",
                  "Borna Care will show a confirmation message before cancelling.",
                  "Confirm the cancellation only if you are sure.",
                  "Once cancelled, the appointment status will update.",
                ],
              },
              {
                title: "Book a new appointment after cancellation",
                points: [
                  "Return to the scheduling screen.",
                  "Select a new service, provider, date, and time if needed.",
                  "Submit the new appointment request after reviewing the details.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Make sure you are inside the correct clinic profile.",
              "Check existing appointments before booking a new one.",
              "Select the correct service or visit type.",
              "Choose the right provider, if provider selection is available.",
              "Review the appointment date and time carefully.",
              "Confirm your phone number and email address.",
              "Add a short note if the clinic needs extra information.",
              "Do not cancel an appointment unless you are sure you no longer need it.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot see available appointment slots",
                a: "Confirm that you selected a service and a provider. Try a different date or a different provider, if available. Contact the clinic if no slots are showing.",
              },
              {
                q: "I selected the wrong appointment time",
                a: "Do not submit if you are still on the review page — go back and select the correct time. If the appointment was already submitted, use the reschedule or cancel option if available. Contact the clinic if you cannot change the appointment from the portal.",
              },
              {
                q: "My appointment details look incorrect",
                a: "Review the selected service, provider, date, and time. Check your patient information and update your profile if your contact details are wrong. Contact the clinic if the appointment information still appears incorrect.",
              },
              {
                q: "I cannot cancel or reschedule",
                a: "Check whether the clinic allows online cancellation or rescheduling. Some clinics may require direct contact for appointment changes. Use the Support or Chat section if available, or call the clinic if the appointment is urgent.",
              },
              {
                q: "I booked an appointment but did not receive confirmation",
                a: "Check the Appointments section again. Review your notifications. Check your email inbox and spam folder. Contact the clinic if the appointment does not appear.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Appointments section in Borna Care allows patients to view existing appointments, book new visits, review appointment details, and manage cancellations or changes from the patient portal. This gives patients a simple way to schedule care while helping clinics reduce manual appointment coordination.",
          },
        ],
      },
    ],
  },
  {
    slug: "account-clinics-dependents",
    title: "Account, Clinics & Dependents",
    description: "Manage your profile, connect clinics, and add dependents.",
    icon: Users,
    product: "Borna Care",
    articles: 1,
    videos: 1,
    youtubeId: "LBJwFm4sYYw",
    videoTitle: "Borna Care Account Management: Manage Your Profile, Clinics & Dependents",
    intro:
      "Use this guide to learn how to manage your Borna Care account, connect with a clinic, view clinic profiles, contact clinic support, and add dependent profiles.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "Borna Care allows you to manage your personal profile, connected clinics, clinic-specific services, and dependent profiles from one account. You can use this section to:",
          },
          {
            type: "list",
            items: [
              "View and update your profile information.",
              "Review connected clinics.",
              "Connect with a new clinic.",
              "Open a clinic dashboard.",
              "Contact clinic support.",
              "Manage dependent profiles for children or family members.",
            ],
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "Your registered email address and phone number.",
              "The clinic name or location ID, if you want to connect with a new clinic.",
              "Permission to manage a dependent profile, if adding a child or family member.",
              "Access to the dependent's phone number and email address, if verification is required.",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "Manage your account",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the account area",
                points: [
                  "Sign in to your Borna Care account.",
                  "Open the account menu from the left side.",
                  "You will see options such as Profile, My Clinics, Account and Security, and Logout.",
                ],
              },
              {
                title: "Review your profile",
                points: [
                  "Click Profile.",
                  "Review your name, phone number, and registered email address.",
                  "If any information needs to be updated, click Edit Profile.",
                ],
              },
              {
                title: "Open Account and Security",
                points: [
                  "Click Account and Security from the account menu.",
                  "This section is used to manage account-level settings.",
                  "Depending on your clinic setup, this area may include login, authentication, and security-related options.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "Keep your email address and phone number updated. Clinics may use this information to contact you about appointments, forms, payments, and support requests.",
            ],
          },
        ],
      },
      {
        id: "clinics",
        title: "Connect and manage clinics",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open My Clinics",
                points: [
                  "Click My Clinics.",
                  "This page shows all clinics connected to your Borna Care account.",
                  "Each clinic card may show the clinic logo, name, address, and phone number.",
                ],
              },
              {
                title: "Connect with a new clinic",
                points: [
                  "Click Connect New Clinic.",
                  "Use the search field to search by clinic name or location ID.",
                  "Enter the clinic name or location ID provided by your clinic.",
                ],
              },
              {
                title: "Search for the clinic",
                points: [
                  "Type the clinic name or location ID in the search field.",
                  "If the clinic is not found, the system will show No Clinic Found.",
                  "Check the spelling or confirm the location ID with your clinic, then search again.",
                ],
              },
              {
                title: "Select and connect the clinic",
                points: [
                  "When the correct clinic appears, review the clinic name, address, and phone number.",
                  "Click Connect Clinic.",
                  "A confirmation window will appear — review the clinic details before continuing.",
                ],
              },
              {
                title: "Confirm your patient status",
                points: [
                  "Borna Care will ask whether you are already a patient at the selected clinic.",
                  "Select Yes, I'm a patient, or No, this is my first visit.",
                  "Click Connect Clinic to complete the connection.",
                ],
              },
              {
                title: "Confirm the clinic connection",
                points: [
                  "After the clinic is connected, you will return to the Clinics and Care page.",
                  "A success message will confirm the connection.",
                  "The clinic will now appear in your connected clinics list.",
                ],
              },
              {
                title: "Open a clinic dashboard",
                points: [
                  "From My Clinics, select the clinic you want to open.",
                  "From the clinic dashboard, you can access Book Appointment, All Appointments, Forms, Payments, Dependents, Notifications, Chat, and Support.",
                ],
              },
              {
                title: "Contact clinic support",
                points: [
                  "From the clinic dashboard, click Support.",
                  "On the left side, review the clinic name, address, phone number, and email address.",
                  "On the right side, the support form will show your pre-filled contact information.",
                ],
              },
              {
                title: "Submit a support request",
                points: [
                  "Choose your preferred contact method — Email or Phone.",
                  "Enter the reason for contacting the clinic.",
                  "Type your message in the message field.",
                  "Review the information and submit the support request.",
                ],
              },
              {
                title: "Switch between connected clinics",
                points: [
                  "Return to My Clinics and select another connected clinic.",
                  "The clinic dashboard will update based on the selected clinic.",
                  "Appointments, forms, payments, notifications, chat, and dependents are shown separately for each clinic.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "If you are connected to more than one clinic, make sure you select the correct clinic before booking appointments, submitting forms, making payments, or sending support messages.",
            ],
          },
        ],
      },
      {
        id: "dependents",
        title: "Add and manage dependents",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the Dependents section",
                points: [
                  "From the clinic dashboard, click Dependents.",
                  "This section is used to manage profiles for children, family members, or other people you are authorized to support.",
                  "If no dependents have been added yet, the page will show that there are no dependent profiles.",
                ],
              },
              {
                title: "Add a dependent",
                points: [
                  "Click Add Dependent.",
                  "The Add Dependent page will open.",
                  "This form allows you to create a dependent profile under your Borna Care account.",
                ],
              },
              {
                title: "Upload a dependent profile image",
                points: [
                  "At the top of the form, you may see an image upload area. This step is optional.",
                  "Upload a profile photo by dragging an image into the upload area or browsing from your device.",
                  "Use a clear square image and follow the file size limit shown on the page.",
                ],
              },
              {
                title: "Confirm guardian information",
                points: [
                  "Answer whether you are the guardian.",
                  "This helps the clinic confirm that you are authorized to manage the dependent's profile, appointments, forms, and communication.",
                  "Select the option that applies to your situation.",
                ],
              },
              {
                title: "Enter dependent name details",
                points: [
                  "Enter the dependent's first name and last name.",
                  "Confirm whether the dependent is already a patient at the selected clinic.",
                  "This helps the clinic match the dependent with an existing patient record, if one exists.",
                ],
              },
              {
                title: "Verify the dependent's phone number",
                points: [
                  "Enter the dependent's phone number.",
                  "Choose how to receive the verification code — SMS or phone call.",
                  "Send the code, enter it in the verification field, and click Verify.",
                ],
              },
              {
                title: "Verify the dependent's email address",
                points: [
                  "Enter the dependent's email address.",
                  "Send the email verification code and check the inbox.",
                  "Enter the code in the verification field and click Verify.",
                ],
              },
              {
                title: "Add additional dependent details",
                points: [
                  "Enter the dependent's date of birth.",
                  "Select the dependent's gender.",
                  "Select the relationship to the account holder.",
                  "Review the information before saving.",
                ],
              },
              {
                title: "Save the dependent profile",
                points: [
                  "Complete all required fields.",
                  "Make sure phone and email verification are completed, if required.",
                  "Review the dependent details and click Save Dependent.",
                  "The dependent profile will be added to the selected clinic.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "The Save Dependent button may remain disabled until all required information and verification steps are completed.",
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Keep your personal profile information updated.",
              "Connect only with clinics you recognize.",
              "Confirm the correct clinic before taking any action.",
              "Use the Support section for clinic-specific questions.",
              "Add dependent profiles only if you are authorized to manage them.",
              "Verify phone and email details carefully.",
              "Review dependent information before saving.",
              "Use separate clinic dashboards for different clinics.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot find my clinic",
                a: "Check the spelling of the clinic name. Try searching by location ID. Confirm the clinic details with your dental office. Refresh the page and try again. Contact the clinic if it still does not appear.",
              },
              {
                q: "I connected to the wrong clinic",
                a: "Do not submit forms, payments, or appointment requests under the wrong clinic. Contact the clinic or Borna support for assistance and ask how to remove or correct the clinic connection.",
              },
              {
                q: "I cannot open a clinic dashboard",
                a: "Confirm the clinic appears under My Clinics. Refresh the page. Sign out and sign in again. Contact the clinic if the dashboard still does not open.",
              },
              {
                q: "I cannot add a dependent",
                a: "Confirm that you are inside the correct clinic dashboard. Check that all required fields are completed. Complete phone and email verification, if required. Confirm that you selected the guardian and relationship details. Contact the clinic if the dependent still cannot be added.",
              },
              {
                q: "I did not receive the phone verification code",
                a: "Confirm the phone number is correct. Wait a few moments and try again. Use the resend option, if available. Try the phone call option, if available. Contact the clinic if the issue continues.",
              },
              {
                q: "I did not receive the email verification code",
                a: "Confirm the email address is correct. Check the spam or junk folder. Wait a few moments and try again. Use the resend option, if available. Contact the clinic if the code still does not arrive.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Account and Dependent Management section in Borna Care helps you manage your profile, connect with clinics, switch between clinic dashboards, contact clinic support, and create dependent profiles. This allows families and caregivers to manage clinic-related activity from one secure Borna Care account.",
          },
        ],
      },
    ],
  },
  {
    slug: "forms",
    title: "Forms",
    description: "Complete, review, and submit clinic forms securely.",
    icon: FileText,
    product: "Borna Care",
    articles: 1,
    videos: 1,
    youtubeId: "UxgaG4bRBCs",
    videoTitle: "How to Complete a New Patient Form in Borna Care",
    intro:
      "Use this guide to learn how to open, complete, review, and submit a new patient form from the Borna Care patient portal.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Forms section in Borna Care lets you complete the intake and consent forms your clinic sends you, review your answers, and submit them securely before your visit.",
          },
          {
            type: "list",
            items: [
              "View forms your clinic has requested",
              "Complete a new patient form section by section",
              "Review your answers before submitting",
              "Submit the completed form securely to your clinic",
            ],
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "The correct clinic selected on your dashboard.",
              "Your personal, insurance, and medical history details on hand.",
              "A stable internet connection.",
            ],
          },
        ],
      },
      {
        id: "complete-form",
        title: "Complete a new patient form",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open your clinic dashboard",
                points: [
                  "Sign in to Borna Care.",
                  "Select the clinic that requested the form.",
                ],
              },
              {
                title: "Open the Forms section",
                points: [
                  "Select Forms from the navigation.",
                  "You will see pending and completed forms.",
                ],
              },
              {
                title: "Open the new patient form",
                points: [
                  "Select the form your clinic sent you.",
                  "The form opens with the first section displayed.",
                ],
              },
              {
                title: "Fill in your details",
                points: [
                  "Complete each section, including personal information, contact details, insurance, and medical history.",
                  "Required fields must be completed before you can continue.",
                ],
              },
              {
                title: "Review your answers",
                points: [
                  "Move back through the sections to check your answers.",
                  "Correct anything that is missing or incorrect.",
                ],
              },
              {
                title: "Submit the form",
                points: [
                  "Select Submit to send the completed form to your clinic.",
                  "The form status updates to submitted in the Forms list.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Complete forms before your appointment so your visit is not delayed.",
              "Use the same details that appear on your insurance card.",
              "Answer medical history questions as accurately as possible.",
              "Review every section before submitting.",
              "Contact the clinic if something in the form does not apply to you.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot see the form my clinic mentioned",
                a: "Check that you selected the correct clinic on your dashboard. If the form is still missing, the clinic may not have sent it yet.",
              },
              {
                q: "The Submit button is not active",
                a: "One or more required fields are incomplete. Go back through the sections and complete every required field.",
              },
              {
                q: "I made a mistake after submitting",
                a: "Contact your clinic through Chat and ask them to resend the form so you can update your answers.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Forms feature in Borna Care gives patients a simple, secure way to complete intake and consent paperwork online before their visit.",
          },
        ],
      },
    ],
  },
  {
    slug: "payments-admin",
    title: "Payments Admin Dashboard",
    description: "Create, send, and track patient payment requests.",
    icon: CreditCard,
    product: "Borna Admin",
    articles: 1,
    videos: 2,
    youtubeId: "KKuQlei7FRk",
    videoTitle: "How to Create Patient Payment Requests in Borna Care | Step-by-Step Admin Payments Demo",
    intro:
      "Use this guide to learn how clinic admins can review payment records, create payment requests, send secure payment links, and manage payment request statuses from the Borna Care admin portal.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Payments section allows clinic staff to manage patient billing activity from one place. Admins can search payment records, filter requests, create new payment requests, send secure payment links, enable SMS notifications, and track payment request statuses.",
          },
          {
            type: "p",
            text: "This feature helps clinics reduce manual billing follow-ups and maintain a clear payment history.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to the Borna Care admin portal.",
              "Permission to manage payments.",
              "The patient's name, email address, and phone number.",
              "The payment amount.",
              "A clear payment description.",
              "The service date and payment due date.",
            ],
          },
        ],
      },
      {
        id: "review-payments",
        title: "Review payment records",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the Payments section",
                points: [
                  "Sign in to the Borna Care admin portal.",
                  "From the left-side menu, click Payments.",
                  "The Payments page will open.",
                  "Review the existing payment requests listed on the page.",
                  "Each payment request may show the patient name, request ID, sent date, due date, amount, payment status, and available actions.",
                ],
              },
              {
                title: "Search or filter payment records",
                points: [
                  "Use the search bar to find a payment request by patient name or request ID.",
                  "Use the filter option to narrow payment requests by status.",
                  "Use the date range filter to review requests for a specific period.",
                  "Use sorting if you need to organize records by date, amount, or recent activity.",
                  "Date range options may include Today, Last 7 days, Last 30 days, Last 60 days, Year to date, and Custom date range.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "create-request",
        title: "Create and send a payment request",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Start a new payment request",
                points: [
                  "Click New Request.",
                  "The Create Payment Request page will open.",
                  "This page allows the admin to create a secure payment link for an existing registered patient or a guest patient who is not yet registered in Borna Care.",
                ],
              },
              {
                title: "Select an existing patient",
                points: [
                  "Search or scroll through the patient list.",
                  "Select the required patient.",
                  "Once selected, the patient profile card will appear on the right side.",
                  "Review the patient's email address, phone number, and registration status.",
                  "The request summary will update automatically after the patient is selected.",
                ],
              },
              {
                title: "Add a guest patient",
                points: [
                  "Use this step only if the patient is not available in the existing patient list.",
                  "Click New Guest Patient.",
                  "Enter the guest patient's name, email address, and phone number.",
                  "Review the guest patient profile card and confirm that the patient is shown as unregistered.",
                ],
              },
              {
                title: "Enter the payment amount",
                points: [
                  "Enter the amount to be requested from the patient.",
                  "Review the total due in the request summary.",
                  "Confirm that the amount is correct before continuing.",
                ],
              },
              {
                title: "Add the payment description",
                points: [
                  "Enter a clear description of the payment request.",
                  "The description should explain what the payment is for.",
                  "Example: Dental Cleaning Services.",
                ],
              },
              {
                title: "Select the service date and due date",
                points: [
                  "Select the Service Date — it should reflect when the treatment or service was provided.",
                  "Select the Due Date — it should reflect when the patient is expected to complete the payment.",
                ],
              },
              {
                title: "Enable SMS notification",
                points: [
                  "Select the SMS notification option if the clinic wants to notify the patient by text message.",
                  "Once selected, the request summary will show both delivery methods: secure email link and SMS notification.",
                ],
              },
              {
                title: "Review the request summary",
                points: [
                  "Before sending, review the patient name, email address, and phone number.",
                  "Confirm the payment amount and payment description.",
                  "Check the service date, due date, and delivery methods.",
                ],
              },
              {
                title: "Send the payment request",
                points: [
                  "Click Send Request.",
                  "Borna Care will create the secure payment link and send the payment request to the patient.",
                  "Wait for the confirmation screen before leaving the page.",
                ],
              },
              {
                title: "Confirm the request was sent",
                points: [
                  "Review the confirmation message and confirm that the payment request was sent successfully.",
                  "Review the generated payment link.",
                  "Check the request progress — the tracker shows that the payment request has been created and sent, and the payment remains pending until the patient completes it.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "manage-requests",
        title: "Track and manage payment requests",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Return to payment history",
                points: [
                  "Click View Payment History.",
                  "The Payments page will reopen.",
                  "The newly created payment request will appear in the payment list.",
                  "Review the patient name, request ID, due date, amount, and status.",
                ],
              },
              {
                title: "Manage a payment request",
                points: [
                  "Open the Actions menu for the required payment request.",
                  "Review the available action options — they may vary depending on the payment status.",
                  "For a new or unpaid request, the admin may be able to discard the payment request if it was created by mistake.",
                ],
              },
              {
                title: "Discard a payment request",
                points: [
                  "Open the Actions menu and select Discard Payment.",
                  "A confirmation message will appear — review the warning carefully.",
                  "Click Discard to confirm.",
                  "The payment request status will update after the request is discarded.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Important",
            items: [
              "Discarding a payment request may permanently remove or deactivate the request. Only discard a request if it was created incorrectly or should no longer be used by the patient.",
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Confirm the correct patient before sending the request.",
              "Check the patient's email address and phone number.",
              "Use a clear payment description.",
              "Confirm the payment amount before sending.",
              "Set the correct service date and due date.",
              "Enable SMS notification when additional visibility is needed.",
              "Review the request summary before clicking Send Request.",
              "Discard incorrect requests only when necessary.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "The patient is not listed",
                a: "Search again using the patient's name, email address, or phone number. Confirm the spelling. Add the patient as a guest if they are not registered. Contact support if the patient should exist but does not appear.",
              },
              {
                q: "The payment request was sent to the wrong patient",
                a: "Do not reuse the incorrect request. Discard the request if available, then create a new payment request for the correct patient. Follow the clinic's internal billing correction process.",
              },
              {
                q: "The payment amount is wrong",
                a: "Do not send the request if it has not been submitted yet — correct the amount before sending. If the request was already sent, discard it if available and create a corrected payment request.",
              },
              {
                q: "The payment status is not updating",
                a: "Confirm whether the patient has completed the payment. Refresh the Payments page and check the payment history. Allow time for processing or verification. Contact Borna support if the status remains incorrect.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Payments section helps clinic admins create secure payment requests, send payment links by email and SMS, track payment status, and manage incorrect requests. This keeps patient billing activity organized inside Borna Care.",
          },
        ],
      },
    ],
  },
  {
    slug: "call-logs",
    title: "Call Logs & AI Summaries",
    description: "Review AI-handled calls, recordings, and transcripts.",
    icon: Phone,
    product: "Borna Connect",
    articles: 1,
    videos: 1,
    youtubeId: "cSqDysdJ7b0",
    videoTitle: "Borna Connect Call Logs: AI Summaries, Recordings & Follow-Ups",
    intro:
      "Use this guide to learn how clinic admins can review AI-handled calls, listen to recordings, read AI summaries, check transcripts, and manage call-related follow-up actions in Borna Connect.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Call Logs section gives the clinic team a structured record of calls handled by Borna Connect. Each call record may include caller details, timestamp, call duration, recording, AI-generated summary, full transcript, action items, and patient profile information.",
          },
          {
            type: "p",
            text: "This helps staff understand patient calls quickly without listening to every recording from beginning to end.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to the Borna Connect admin portal.",
              "Permission to view call logs.",
              "The correct clinic selected.",
              "A date range, patient name, or phone number if searching for a specific call.",
              "Permission to review recordings and transcripts, if required by the clinic.",
            ],
          },
        ],
      },
      {
        id: "find-a-call",
        title: "Find and open a call",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open Call Logs",
                points: [
                  "Sign in to the Borna Connect admin portal.",
                  "From the left-side menu, click Call Logs.",
                  "Review the list of calls shown for the selected period.",
                  "Each call record may show the caller or patient name, phone number, call timestamp, recording, handle status, and action button.",
                ],
              },
              {
                title: "Search or filter calls",
                points: [
                  "Use the search bar to search by patient name or phone number.",
                  "Use the date range filter to narrow calls for a specific period.",
                  "Review the filtered list to find the required call record.",
                ],
              },
              {
                title: "Open a call record",
                points: [
                  "Find the call you want to review and click the action button for that call.",
                  "The Call Details page will open.",
                  "Review the caller name, call type, phone number, timestamp, duration, and status.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "review-a-call",
        title: "Review a call",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Review the AI call summary",
                points: [
                  "Go to the AI-generated summary section.",
                  "Read the summary to understand the purpose of the call.",
                  "Check what the caller asked and how the AI assistant responded.",
                  "Identify whether the call was resolved or needs staff review.",
                ],
              },
              {
                title: "Review Action Required",
                points: [
                  "Check the Action Required panel and review the recommended next steps.",
                  "Confirm whether clinic staff need to take any action.",
                  "Examples of action items include confirming an appointment, contacting the patient, reviewing a billing question, confirming clinic policy information, or sending appointment reminders or instructions.",
                ],
              },
              {
                title: "Review the patient profile",
                points: [
                  "Open or review the patient profile card on the call detail page.",
                  "Check the caller name, phone number, and any available patient ID or email address.",
                  "If the caller is unknown, the profile may show only the phone number.",
                ],
              },
              {
                title: "Play the call recording",
                points: [
                  "Go to the audio recording section and click play to listen to the call.",
                  "Use the waveform or timeline to move through the recording.",
                  "Pause or replay sections as needed.",
                  "Download the recording if the clinic needs a copy for internal review.",
                ],
              },
              {
                title: "Review the conversation transcript",
                points: [
                  "Open the Conversation Transcript section and scroll through the transcript.",
                  "Review the exchange between the caller and the AI assistant.",
                  "Confirm what the caller asked and what information the AI assistant provided.",
                  "Check whether anything needs correction, confirmation, or follow-up.",
                ],
              },
              {
                title: "Use the transcript for quality review",
                points: [
                  "Verify whether the AI understood the caller correctly and whether the AI response was accurate.",
                  "Check whether the caller provided the required details.",
                  "Confirm whether the appointment, billing question, or general inquiry was handled properly and whether the clinic needs to follow up.",
                ],
              },
              {
                title: "Review appointment-related calls",
                points: [
                  "For appointment-related calls, check whether the AI captured the patient name, date of birth (if required), phone number, and email address.",
                  "Confirm the appointment reason, preferred date and time, and the confirmed appointment details.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "complete-a-review",
        title: "Complete the review",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Mark a call as complete",
                points: [
                  "Review the summary, recording, transcript, action items, and patient profile.",
                  "Complete any required follow-up action.",
                  "Click Mark as Complete, if available.",
                  "The call status will update once the review is completed.",
                ],
              },
              {
                title: "Return to the Call Logs page",
                points: [
                  "Go back to the Call Logs list.",
                  "Continue reviewing other calls if needed.",
                  "Use search or filters to find another record and confirm that reviewed calls are updated properly.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Start with the AI summary for a quick understanding.",
              "Use the transcript to confirm exact details.",
              "Listen to the recording when the summary or transcript needs verification.",
              "Review action items before marking a call complete.",
              "Follow up on unresolved calls promptly.",
              "Search by patient name or phone number when looking for a specific call.",
              "Download recordings only when required by clinic policy.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot find a call",
                a: "Confirm the date range. Search by phone number or patient name. Clear filters and try again. Confirm that the call was routed through Borna Connect.",
              },
              {
                q: "The caller is showing as unknown",
                a: "Review the phone number and check whether it matches an existing patient record. Use the transcript to identify whether the caller provided a name. Update the patient record if appropriate.",
              },
              {
                q: "The AI summary seems incomplete",
                a: "Read the full transcript and listen to the recording. Check the Action Required section and create or update a follow-up if staff action is needed.",
              },
              {
                q: "The transcript does not look accurate",
                a: "Listen to the call recording and compare the transcript with the audio. Use the recording as the reference if there is a mismatch. Report the issue to Borna support if needed.",
              },
              {
                q: "The call status is not updating",
                a: "Confirm that the required review action was completed. Refresh the Call Logs page and open the call record again. Contact support if the status still does not update.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Call Logs section in Borna Connect helps clinic teams review AI-handled calls, understand patient intent, check summaries and transcripts, listen to recordings, and manage follow-up actions. This gives the clinic a clear record of patient calls and reduces manual call review time.",
          },
        ],
      },
    ],
  },
  {
    slug: "connect-chat",
    title: "Connect Chat, Archived Chats & Follow-Ups",
    description: "Manage patient chats, archived chats, and follow-up tasks.",
    icon: Inbox,
    product: "Borna Connect",
    articles: 1,
    videos: 1,
    youtubeId: "P-qbDvW8Acg",
    videoTitle: "Borna Connect Chat, Archived Chat, & Follow-Ups | Step-by-Step Demo",
    intro:
      "Use this guide to learn how clinic admins can review patient chats, take over AI-assisted conversations, archive completed chats, and manage follow-up tasks in Borna Connect.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Chat section in Borna Connect allows clinic staff to review patient conversations from the admin side. Chats may include AI-assisted responses, appointment booking requests, billing questions, general inquiries, and conversations that require human support.",
          },
          {
            type: "p",
            text: "The Archived Chats section keeps completed conversations available for reference, while the Follow-ups section helps staff track unresolved or action-required patient requests.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to the Borna Connect admin portal.",
              "Permission to view and respond to chats.",
              "The correct clinic selected.",
              "Permission to manage follow-ups, if applicable.",
              "Patient information available if manual follow-up is needed.",
            ],
          },
        ],
      },
      {
        id: "review-chats",
        title: "Review and respond to chats",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the Chat section",
                points: [
                  "Sign in to the Borna Connect admin portal.",
                  "From the left-side menu, click Chat.",
                  "The All Chats page will open — review the list of patient conversations.",
                  "Each chat may show the patient name, recent message, chat topic or title, time of latest activity, and conversation status.",
                ],
              },
              {
                title: "Open a patient conversation",
                points: [
                  "Select a conversation from the chat list — the full chat thread will open on the right side.",
                  "Review the messages between the patient and the AI assistant or clinic staff.",
                  "Check the conversation category, such as appointment booking, billing question, or general inquiry.",
                ],
              },
              {
                title: "Review an appointment chat",
                points: [
                  "Open an appointment-related conversation.",
                  "Review the patient's selected option, such as Book Appointment.",
                  "Check the appointment slot shown by the AI assistant and confirm whether the appointment was successfully scheduled.",
                  "Review the AI Summary below the conversation — it helps the clinic understand what happened without reading every message in detail.",
                ],
              },
              {
                title: "Review the AI Summary",
                points: [
                  "Go to the AI Summary section and check the purpose of the chat.",
                  "Review the conversation duration and the conversation tag.",
                  "Confirm whether the issue was resolved and identify whether any further action is required.",
                ],
              },
              {
                title: "Review human handoff chats",
                points: [
                  "Open a conversation where the patient requested a human agent.",
                  "Review the previous AI messages and check what the patient asked.",
                  "Identify what still needs a staff response, using the full chat history to understand the context before replying.",
                ],
              },
              {
                title: "Reply as clinic staff",
                points: [
                  "Click inside the message field and type the response from the clinic side.",
                  "Keep the message clear and specific, then send it.",
                  "Continue the conversation until the patient's request is addressed.",
                  "Staff can answer clinic-specific questions, appointment coordination questions, billing questions, or requests the AI could not complete.",
                ],
              },
              {
                title: "End a chat session",
                points: [
                  "Confirm that the patient's question has been answered, and ask whether they need anything else, if appropriate.",
                  "Select the option to end the chat session, review the confirmation popup, and confirm the action to close the chat.",
                  "After the session ends, the patient may no longer be able to send messages in that specific conversation.",
                ],
              },
              {
                title: "Review the completed chat summary",
                points: [
                  "After ending the chat, review the AI Summary generated for the completed conversation.",
                  "Confirm the main reason for the chat and check whether the patient's issue was resolved.",
                  "Identify if any appointment, billing, or support action is still needed.",
                ],
              },
              {
                title: "View patient contact information",
                points: [
                  "Open the contact information panel.",
                  "Review the patient name, phone number, and patient ID, if available.",
                  "Use this information if the clinic needs to follow up outside the chat.",
                ],
              },
              {
                title: "Start a new chat from the admin side",
                points: [
                  "Click New Chat, if available.",
                  "Search for the patient and select them from the list.",
                  "A new chat window will open — type and send the clinic message.",
                  "This allows staff to start a conversation with a selected patient when needed.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "archived-chats",
        title: "Archive chats and review archived chats",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Archive a chat",
                points: [
                  "Open or select the completed chat and choose the archive option.",
                  "Confirm the action if prompted.",
                  "The chat will move out of the active chat list and a confirmation message may appear once the chat is archived.",
                  "Archiving helps keep the active inbox clean while keeping the chat available for future reference.",
                ],
              },
              {
                title: "Open Archived Chats",
                points: [
                  "From the left-side menu, click Archived Chats.",
                  "Review the list of archived conversations and use search if needed.",
                  "Open an archived conversation to review the previous chat details.",
                  "Archived chats may show the patient name, chat title, date, status, and available actions.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "follow-ups",
        title: "Manage follow-ups",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open Follow-ups",
                points: [
                  "From the left-side menu, click Follow-ups.",
                  "The Follow-ups page will open — review the list of follow-up tasks.",
                  "Check the patient name, reason, priority, status, and action options.",
                  "Follow-ups may be created from chats, billing questions, unresolved conversations, or patient requests requiring staff action.",
                ],
              },
              {
                title: "Review follow-up details",
                points: [
                  "Open the required follow-up and review the patient name.",
                  "Check the source of the follow-up, the reason, and the priority.",
                  "Read the follow-up summary and review the timeline of actions.",
                  "The summary explains why the follow-up was created and what the clinic team may need to do next.",
                ],
              },
              {
                title: "Complete a follow-up",
                points: [
                  "Review the required action and complete the task outside or inside Borna, depending on the workflow.",
                  "Return to the follow-up record and click Mark as Complete.",
                  "Confirm that the follow-up status has been updated.",
                ],
              },
              {
                title: "Review unresolved chats",
                points: [
                  "Return to the Chat section and open any conversation marked as unresolved.",
                  "Review the AI Summary and check the conversation tag, such as Billing Question.",
                  "Follow up with the patient if the AI could not resolve the issue.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Review the AI Summary before responding.",
              "Read the full chat when context is needed.",
              "Reply promptly to conversations handed off from the AI assistant.",
              "End chat sessions only after the patient's question has been fully answered.",
              "Archive completed chats to keep the active inbox clean.",
              "Review follow-ups daily so unresolved patient requests are not missed.",
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Chat, Archived Chats, and Follow-ups sections in Borna Connect help clinic teams review AI-assisted conversations, step in when a human response is needed, keep completed chats organized, and track every patient request that still requires action.",
          },
        ],
      },
    ],
  },
];


export type VideoItem = {
  id: string;
  title: string;
  topic: string;
  topicSlug: string;
  product: Product;
  youtubeId: string;
  description: string;
};

export const videos: VideoItem[] = [
  {
    id: "yOcU7Jb5cvc",
    title: "Borna Care Chat",
    topic: "Chatting",
    topicSlug: "chatting",
    product: "Borna Care",
    youtubeId: "yOcU7Jb5cvc",
    description: "Start a chat with your clinic, ask questions, and book through chat.",
  },
  {
    id: "UxgaG4bRBCs",
    title: "How to Complete a New Patient Form in Borna Care",
    topic: "Forms",
    topicSlug: "forms",
    product: "Borna Care",
    youtubeId: "UxgaG4bRBCs",
    description: "Fill in, review, and securely submit a new patient form.",
  },
  {
    id: "osWYtKXv6_8",
    title: "Borna Care Payments Section: Review, Pay & Track Your Payment Requests",
    topic: "Payments",
    topicSlug: "payments",
    product: "Borna Care",
    youtubeId: "osWYtKXv6_8",
    description: "Review a payment request, pay it, and track it in your history.",
  },
  {
    id: "gd7jmOGaDkI",
    title: "Borna Care Payment Dashboard: Create, Send & Track Patient Payment Requests",
    topic: "Payments",
    topicSlug: "payments",
    product: "Borna Admin",
    youtubeId: "gd7jmOGaDkI",
    description: "Create, send, and track patient payment requests from the admin dashboard.",
  },
  {
    id: "LBJwFm4sYYw",
    title: "Borna Care Account Management: Manage Your Profile, Clinics & Dependents",
    topic: "Account, Clinics & Dependents",
    topicSlug: "account-clinics-dependents",
    product: "Borna Care",
    youtubeId: "LBJwFm4sYYw",
    description: "Manage your profile, connect clinics, and add dependent profiles.",
  },
  {
    id: "gFxfjmlKLMQ",
    title: "Inside the Borna Dashboard: A Simpler Way to Manage Healthcare",
    topic: "Getting Started",
    topicSlug: "getting-started",
    product: "Borna Admin",
    youtubeId: "gFxfjmlKLMQ",
    description: "A tour of the Borna admin dashboard and how clinics manage day-to-day work.",
  },
];

export const popularGuides = [
  { title: "Signing up and signing in to the admin portal", slug: "getting-started" },
  { title: "Paying a payment request", slug: "payments" },
  { title: "Booking an appointment", slug: "appointments" },
  { title: "Using chat in Borna Care", slug: "chatting" },
];

export type SearchResult = {
  kind: "Article" | "Video";
  title: string;
  description: string;
  topic: string;
  topicSlug: string;
  product: Product;
};

const articleResults: SearchResult[] = topics.map((t) => ({
  kind: "Article",
  title: t.title,
  description: t.description,
  topic: t.title,
  topicSlug: t.slug,
  product: t.product,
}));

const videoResults: SearchResult[] = videos.map((v) => ({
  kind: "Video",
  title: v.title,
  description: v.description,
  topic: v.topic,
  topicSlug: v.topicSlug,
  product: v.product,
}));

export const allResults: SearchResult[] = [...articleResults, ...videoResults];

export function searchHelp(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allResults.filter((r) =>
    `${r.title} ${r.description} ${r.topic} ${r.product}`.toLowerCase().includes(q),
  );
}
